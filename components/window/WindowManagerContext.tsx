"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { WindowId } from "@/lib/windowIds";

type WindowState = {
  isOpen: boolean;
  zIndex: number;
};

type WindowManagerContextValue = {
  windows: Record<WindowId, WindowState>;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  closeAll: () => void;
  isTopWindow: (id: WindowId) => boolean;
};

const WindowManagerContext = createContext<WindowManagerContextValue | null>(
  null,
);

const BASE_Z = 10;

function createInitialState(): Record<WindowId, WindowState> {
  return {
    resume: { isOpen: false, zIndex: BASE_Z },
    projects: { isOpen: false, zIndex: BASE_Z },
    about: { isOpen: false, zIndex: BASE_Z },
    substack: { isOpen: false, zIndex: BASE_Z },
    notai: { isOpen: false, zIndex: BASE_Z },
  };
}

export function WindowManagerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(
    createInitialState,
  );
  const zCounter = useRef(BASE_Z);

  const focusWindow = useCallback((id: WindowId) => {
    zCounter.current += 1;
    const nextZ = zCounter.current;
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: nextZ },
    }));
  }, []);

  const openWindow = useCallback(
    (id: WindowId) => {
      zCounter.current += 1;
      const nextZ = zCounter.current;
      setWindows((prev) => ({
        ...prev,
        [id]: { isOpen: true, zIndex: nextZ },
      }));
    },
    [],
  );

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  }, []);

  const closeAll = useCallback(() => {
    setWindows(createInitialState());
  }, []);

  const isTopWindow = useCallback(
    (id: WindowId) => {
      const openZs = Object.values(windows)
        .filter((w) => w.isOpen)
        .map((w) => w.zIndex);
      if (openZs.length === 0) return false;
      return windows[id].zIndex === Math.max(...openZs);
    },
    [windows],
  );

  const value = useMemo(
    () => ({ windows, openWindow, closeWindow, focusWindow, closeAll, isTopWindow }),
    [windows, openWindow, closeWindow, focusWindow, closeAll, isTopWindow],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error(
      "useWindowManager must be used within a WindowManagerProvider",
    );
  }
  return ctx;
}
