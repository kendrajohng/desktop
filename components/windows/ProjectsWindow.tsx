import { clients, workSamples } from "@/lib/content";

export function ProjectsWindow() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-heading text-lg font-bold">Work samples</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {workSamples.map((sample) => (
            <li
              key={sample.client + sample.description}
              className="rounded-xl bg-white/60 px-4 py-3 shadow-sm"
            >
              <p className="font-heading text-sm font-semibold">
                {sample.client}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                {sample.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-heading text-lg font-bold">Clients</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {clients.map((client) => (
            <span
              key={client}
              className="rounded-full px-3 py-1 text-xs font-medium text-[var(--color-text)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-titlebar-start), var(--color-titlebar-end))",
              }}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
