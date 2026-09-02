import { WindowManagerProvider } from "@/components/window/WindowManagerContext";
import { MenuBar } from "@/components/menubar/MenuBar";
import { Desktop } from "@/components/desktop/Desktop";

export default function Home() {
  return (
    <WindowManagerProvider>
      <MenuBar />
      <Desktop />
    </WindowManagerProvider>
  );
}
