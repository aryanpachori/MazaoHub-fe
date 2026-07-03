const phases = [
  {
    label: "Phase 1 — Setup",
    color: "bg-[#E6F1FB] text-[#185FA5]",
    stages: [
      "Field inspection",
      "Soil testing",
      "Farm clearing",
      "Soil fertility",
      "Field prep",
    ],
  },
  {
    label: "Phase 2 — Growing",
    color: "bg-[#E1F5EE] text-[#085041]",
    stages: [
      "Harrowing",
      "Water structures",
      "Ridges",
      "Irrigation system",
      "Sowing",
      "Irrigation",
      "Weed control",
      "Fertilizer",
      "Pest control",
      "Other techniques",
    ],
  },
  {
    label: "Phase 3 — Harvest",
    color: "bg-[#FAEEDA] text-[#854F0B]",
    stages: ["Harvest prep", "Harvesting", "Post-harvest", "Crop storage"],
  },
];

const columns = [
  {
    icon: "📋",
    title: "Track every stage",
    body: "Log every farm activity, input, cost, GPS location, and photo. Agronomists add advice at each stage. Farm managers see everything in real time.",
  },
  {
    icon: "📊",
    title: "Predict harvest volume",
    body: "Soil NPK + activity stage + land size = accurate yield forecast. Know what's coming 30-90 days ahead. Reduce supply risk for buyers and processors.",
  },
  {
    icon: "🌍",
    title: "Connect to market",
    body: "Verified farm data feeds directly into CropSupply. Buyers, exporters, and processors can source your supply before it reaches market.",
  },
];

export default function Product() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Everything in one system
          </h2>
          <p className="text-lg text-gray-500">
            From soil testing to harvest forecast to market linkage.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {phases.map((phase) => (
            <div key={phase.label}>
              <div className="text-[9px] uppercase tracking-wide font-medium text-gray-400 text-center mb-2">
                {phase.label}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {phase.stages.map((stage) => (
                  <span
                    key={stage}
                    className={`text-[10px] font-medium px-2 py-1 rounded-lg ${phase.color}`}
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {columns.map((c) => (
            <div key={c.title}>
              <div className="w-10 h-10 rounded-xl bg-[#E1F5EE] flex items-center justify-center text-[#0F6E56] text-lg">
                {c.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mt-3 mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
