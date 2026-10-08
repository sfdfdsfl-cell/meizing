import Reveal from "@/components/Reveal";

const rows: { feature: string; broadband: string; ill: string; illClass: string }[] = [
  {
    feature: "Contention Ratio",
    broadband: "Multi-tenant Dynamic",
    ill: "1:1 Unshared Dedicated",
    illClass: "text-[#2d2be0]",
  },
  {
    feature: "Bandwidth Symmetry",
    broadband: "High Asymmetric",
    ill: "100% Symmetrical Duplex",
    illClass: "text-emerald-700",
  },
  {
    feature: "SLA Guarantee",
    broadband: "99.5% Standard",
    ill: "99.9% Financial Assurance",
    illClass: "text-emerald-700",
  },
  {
    feature: "Mean Time to Restore (MTTR)",
    broadband: "< 8 Hours",
    ill: "< 4 Hours Mission-Critical",
    illClass: "text-[#2d2be0]",
  },
  {
    feature: "IP Allocation",
    broadband: "Dynamic IPv4 (Add-on optional)",
    ill: "Subnet Pool (/29 or /28 Included)",
    illClass: "text-[#0b0b1a]",
  },
  {
    feature: "Routing Protocols",
    broadband: "Standard Gateway",
    ill: "BGP v4/v6 Peering & Dual Cross-Connect",
    illClass: "text-[#0b0b1a]",
  },
];

export default function BusinessComparison() {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="w-full bg-[#f3f3f5]"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-indigo-400 bg-indigo-50 px-3 py-1 text-[10px] font-medium text-indigo-700">
              Technical Audit
            </span>
            <h2
              id="comparison-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-[#0b0b1a] sm:text-3xl"
            >
              Broadband vs. Leased Line Comparison
            </h2>
          </div>
          <span className="self-start rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:self-auto">
            All SLAs financially guaranteed
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#e9eafb] text-[10px] font-semibold uppercase tracking-wide sm:text-xs">
                  <th scope="col" className="px-4 py-3.5 text-[#0b0b1a]">
                    Feature
                  </th>
                  <th scope="col" className="border-l border-slate-200 px-4 py-3.5 text-[#0b0b1a]">
                    Corporate Broadband
                  </th>
                  <th scope="col" className="border-l border-slate-200 px-4 py-3.5 text-[#2d2be0]">
                    Internet Leased Line (ILL)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-t border-slate-200">
                    <th
                      scope="row"
                      className="px-4 py-3.5 font-semibold text-[#0b0b1a]"
                    >
                      {row.feature}
                    </th>
                    <td className="border-l border-slate-200 px-4 py-3.5 text-slate-500">
                      {row.broadband}
                    </td>
                    <td
                      className={`border-l border-slate-200 bg-[#f7f8fe] px-4 py-3.5 font-semibold ${row.illClass}`}
                    >
                      {row.ill}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
