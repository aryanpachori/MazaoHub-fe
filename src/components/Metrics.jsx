const categories = [
  {
    icon: "🌱",
    title: "Farm metrics",
    bg: "bg-[#E1F5EE]",
    border: "border-[#9FE1CB]",
    text: "text-[#085041]",
    dot: "text-[#1D9E75]",
    items: [
      "Farm size and acres under production",
      "Crop stage progress (1 of 19)",
      "Yield estimate and actual yield",
      "Yield per acre",
      "Crop loss tracking",
      "Harvest date and storage status",
    ],
  },
  {
    icon: "💰",
    title: "Cost metrics",
    bg: "bg-[#E6F1FB]",
    border: "border-[#B8D4F5]",
    text: "text-[#185FA5]",
    dot: "text-[#185FA5]",
    items: [
      "Cost per farm, per acre, per crop",
      "Cost per farming stage",
      "Labour cost breakdown",
      "Input cost per season",
      "Machinery and irrigation cost",
      "Transport cost",
    ],
  },
  {
    icon: "📈",
    title: "Profit metrics",
    bg: "bg-[#FAEEDA]",
    border: "border-[#FAC775]",
    text: "text-[#854F0B]",
    dot: "text-[#854F0B]",
    items: [
      "Expected and actual revenue",
      "Gross margin per crop",
      "Profit per acre",
      "Break-even price",
      "ROI per season",
      "Profitability per farmer",
    ],
  },
  {
    icon: "🤝",
    title: "Contract farming",
    bg: "bg-[#EEEDFE]",
    border: "border-[#C4C0F5]",
    text: "text-[#534AB7]",
    dot: "text-[#534AB7]",
    items: [
      "Contracted farmers and acres",
      "Target vs forecasted volume",
      "Delivered volume and fulfillment rate",
      "Farmer compliance score",
      "Farms at risk",
      "Side-selling risk alerts",
    ],
  },
];

export default function Metrics() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Every number you need — in one place
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            MazaoHub calculates farm metrics, cost metrics, profit metrics, and
            contract farming metrics automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`${cat.bg} rounded-2xl p-5 border ${cat.border}`}
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <div className={`text-sm font-semibold ${cat.text} mb-3 uppercase tracking-wide`}>
                {cat.title}
              </div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-1.5">
                    <span className={cat.dot}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
