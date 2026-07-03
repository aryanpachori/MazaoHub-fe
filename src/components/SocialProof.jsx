const stats = [
  { value: "555K+", label: "Farmers registered" },
  { value: "260K+", label: "Farm data records" },
  { value: "644K+", label: "Soil tests completed" },
  { value: "14", label: "Tanzania regions covered" },
];

const testimonials = [
  {
    quote:
      "MazaoHub gave us real-time visibility into 3,000 contracted farmers. We knew harvest volumes 8 weeks in advance for the first time.",
    name: "Processing Company",
    role: "East Africa Operations Director",
    stars: true,
  },
  {
    quote:
      "Our cooperative used to manage 800 members with spreadsheets. MazaoHub replaced that with a live dashboard showing every farm stage.",
    name: "Cooperative Manager",
    role: "Tanzania",
  },
  {
    quote:
      "Banks need verified data to lend to farmers. MazaoHub's farm activity records and harvest forecasts gave us the confidence to finance.",
    name: "Agricultural Bank",
    role: "East Africa",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#F5F4F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">
          Trusted by organisations across East Africa
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100"
            >
              <div className="text-3xl font-semibold text-[#0F6E56]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              {t.stars && <div className="text-[#0F6E56] mb-3">★★★★★</div>}
              <p className="text-sm text-gray-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 text-center mt-12 mb-4">
          Working with multinationals and governments
        </p>
        <div className="flex gap-8 justify-center flex-wrap">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-24 h-10 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
