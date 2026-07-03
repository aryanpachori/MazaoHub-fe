const before = [
  "Farmers are growing maize — but you don't know which ones or where exactly.",
  "Some farms were planted — but you don't know the stage or progress.",
  "Some inputs were distributed — but you can't verify what was used or how much.",
  "Harvest may happen around August — but no one knows the exact volume.",
  "Costs are written in Excel — but reports come late and are often wrong.",
  "Buyers may be available — but supply is informal and unverifiable.",
  "Disease outbreak on one farm — you find out weeks later.",
  "Agronomist visited — but no one knows what was advised.",
];

const after = [
  "How many farmers are active — by name, location, GPS.",
  "What stage each crop is in — from field inspection to crop storage.",
  "Which inputs were used — by who, when, at what cost, with photo evidence.",
  "Expected harvest volume and date — calculated from soil data and stage progress.",
  "Cost per farm, per acre, per crop, per stage — real-time.",
  "Which supply is verified and ready for CropSupply listing.",
  "Which farms have disease risk — flagged by agronomist in real time.",
  "Complete agronomist log — every visit, comment, and recommendation recorded.",
];

export default function BeforeAfter() {
  return (
    <section className="bg-[#F5F4F0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            From guessing to seeing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Agriculture is managed blindly. Phone calls, WhatsApp messages, Excel
            sheets, verbal promises, and guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❌</span>
              <span className="text-lg font-semibold text-gray-900">
                Before MazaoHub
              </span>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-300 mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0F6E56] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✓</span>
              <span className="text-lg font-semibold text-white">After MazaoHub</span>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5DCAA5] mt-1.5 flex-shrink-0" />
                  <span className="text-sm opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-gray-900">
            MazaoHub changes you from guessing to seeing.
          </p>
        </div>
      </div>
    </section>
  );
}
