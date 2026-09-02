export function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-plum"
      style={{
        background:
          "linear-gradient(135deg, var(--color-titlebar-start), var(--color-titlebar-end))",
      }}
    >
      {children}
    </div>
  );
}
