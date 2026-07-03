const problems = [
  {
    icon: "📉",
    title: "20–40% produce lost",
    body: "Post-harvest losses from poor handling, no storage intelligence, and timing mismatches.",
  },
  {
    icon: "🌾",
    title: "No farm visibility",
    body: "Farm owners, processors, and cooperatives have no real-time view of what's happening on the farm.",
  },
  {
    icon: "💸",
    title: "Supply chain blindness",
    body: "Buyers, processors, and exporters can't see incoming supply until it hits the market. Too late to plan.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[#F5F4F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Tanzania loses $1.5B every year to agricultural inefficiencies
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Poor farming practices, no visibility, and broken supply chains cost
            farmers, processors, and governments billions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0F6E56] rounded-2xl p-6 text-white flex items-center justify-between flex-wrap gap-4 mt-6">
          <p className="text-lg font-medium">
            MazaoHub solves all three — from field inspection to harvest to market.
          </p>
          <a
            href="#solutions"
            className="border border-white/30 text-white text-sm px-4 py-2 rounded-xl hover:bg-white/10 cursor-pointer"
          >
            See how it works →
          </a>
        </div>
      </div>
    </section>
  );
}
