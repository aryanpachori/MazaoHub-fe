const points = [
  "Buyers see incoming supply before harvest",
  "Processors lock forward contracts at stage 1–9",
  "Exporters source verified, traceable produce",
];

const rows = [
  { crop: "🌽 Maize · Dodoma", value: "1,400T · 13 days" },
  { crop: "🌾 Rice · Morogoro", value: "900T · 11 days" },
  { crop: "🧅 Onion · Arusha", value: "520T · 9 days" },
];

export default function CropSupplySection() {
  return (
    <section className="bg-[#085041] py-20 text-white" id="cropsupply">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-[10px] uppercase tracking-wide opacity-60 mb-3">
            Part of the MazaoHub ecosystem
          </div>
          <h2 className="text-3xl font-semibold mb-4">
            CropSupply — the market layer
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Every crop managed in MazaoHub can be connected to CropSupply — the
            world's first ward-level harvest intelligence marketplace.
          </p>

          <div className="mb-2">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm opacity-90 mb-2">
                <span>✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-6 border border-white/30 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/10 inline-block cursor-pointer"
          >
            Visit CropSupply →
          </a>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-5 text-gray-900">
            <div className="text-[10px] uppercase text-gray-400 mb-3">
              Live harvest intelligence
            </div>
            {rows.map((r) => (
              <div
                key={r.crop}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 text-sm"
              >
                <span>{r.crop}</span>
                <span>{r.value}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-3 text-white/60">
            5,681 farmers tracked · 28 regions · Updated every 6h
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-10 border-t border-white/20">
        <p className="text-center text-sm opacity-60 uppercase tracking-wide mb-8">
          The loop that changes everything
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
            <div className="text-sm font-semibold mb-2">MazaoHub sends →</div>
            <div className="space-y-1 text-[11px] opacity-70">
              <div>Crop type + location</div>
              <div>Farming stage</div>
              <div>Expected volume</div>
              <div>Harvest date</div>
              <div>Quality details</div>
              <div>Traceability data</div>
            </div>
          </div>

          <div className="text-3xl opacity-30">⇄</div>

          <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
            <div className="text-sm font-semibold mb-2">← CropSupply sends back</div>
            <div className="space-y-1 text-[11px] opacity-70">
              <div>Buyer demand</div>
              <div>Price signals</div>
              <div>Orders</div>
              <div>Contract offers</div>
              <div>Market interest</div>
              <div>Transaction data</div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm opacity-50 mt-8">
          MazaoHub tracks production. CropSupply creates market access. Market
          demand improves the next farm plan.
        </p>
      </div>
    </section>
  );
}
