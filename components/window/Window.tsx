"use client";

import {
  AnimatePresence,
  motion,
  useDragControls,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { WindowId } from "@/lib/windowIds";
import { useWindowManager } from "./WindowManagerContext";
import { useIsMobile } from "@/lib/useIsMobile";

type WindowProps = {
  id: WindowId;
  title: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
  children: React.ReactNode;
};

export function Window({
  id,
  title,
  defaultPosition,
  defaultSize,
  children,
}: WindowProps) {
  const { windows, closeWindow, focusWindow, isTopWindow } = useWindowManager();
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();

  const state = windows[id];
  const isFocused = isTopWindow(id);

  const closeOnEscape = useRef<(e: KeyboardEvent) => void>(null);
  useEffect(() => {
    closeOnEscape.current = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state.isOpen && isFocused) {
        closeWindow(id);
      }
    };
  }, [state.isOpen, isFocused, closeWindow, id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => closeOnEscape.current?.(e);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.18, ease: "easeOut" as const };

  const chrome = state.isOpen && (
    <motion.div
      key={id}
      role="dialog"
      aria-label={title}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={transition}
      onPointerDown={() => focusWindow(id)}
      drag={!isMobile}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragListener={false}
      dragControls={dragControls}
      className={
        isMobile
          ? "fixed inset-x-0 bottom-0 top-11 flex flex-col bg-window-bg"
          : "absolute flex flex-col rounded-2xl bg-window-bg overflow-hidden"
      }
      style={
        isMobile
          ? { zIndex: state.zIndex }
          : {
              zIndex: state.zIndex,
              left: defaultPosition.x,
              top: defaultPosition.y,
              width: defaultSize.width,
              height: defaultSize.height,
            }
      }
      dragElastic={0}
      whileDrag={{ cursor: "grabbing" }}
    >
      <WindowTitleBar
        title={title}
        onClose={() => closeWindow(id)}
        isMobile={isMobile}
        isFocused={isFocused}
        onDragStart={(e) => dragControls.start(e)}
      />
      <div className="flex-1 overflow-y-auto px-6 py-5 font-body text-[var(--color-text)]">
        {children}
      </div>
    </motion.div>
  );

  return (
    <>
      <div ref={constraintsRef} className="pointer-events-none fixed inset-0" />
      <AnimatePresence>{chrome}</AnimatePresence>
    </>
  );
}

function WindowTitleBar({
  title,
  onClose,
  isMobile,
  isFocused,
  onDragStart,
}: {
  title: string;
  onClose: () => void;
  isMobile: boolean;
  isFocused: boolean;
  onDragStart: (e: React.PointerEvent) => void;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center px-4 py-3 font-heading font-medium text-[var(--color-text)] ${
        isFocused ? "shadow-plum-active" : "shadow-plum"
      }`}
      style={{
        background:
          "linear-gradient(90deg, var(--color-titlebar-start), var(--color-titlebar-end))",
        cursor: isMobile ? "default" : "grab",
        touchAction: "none",
      }}
      onPointerDown={(e) => {
        if (isMobile) return;
        onDragStart(e);
      }}
    >
      {isMobile ? (
        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-white/50 px-3 py-1 text-sm font-heading font-semibold"
        >
          Close
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <TrafficLight color="#EC6A5E" label="Close" onClick={onClose} />
          <TrafficLight color="#F4BF4F" label="Minimize" onClick={onClose} />
          <TrafficLight color="#61C554" label="Maximize" />
        </div>
      )}
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-sm">
        {title}
      </span>
    </div>
  );
}

function TrafficLight({
  color,
  label,
  onClick,
}: {
  color: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      onPointerDown={(e) => e.stopPropagation()}
      className="h-3 w-3 rounded-full opacity-80 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      style={{ backgroundColor: color }}
    />
  );
}
