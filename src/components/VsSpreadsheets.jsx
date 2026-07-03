const items = [
  "Which fertilizer was applied",
  "Who applied it",
  "When it was applied",
  "How much it cost",
  "Which crop stage it belongs to",
  "Whether a photo was uploaded",
  "Whether GPS confirms the farm location",
  "What the agronomist said",
  "How it affects the yield estimate",
  "Whether the crop is ready for CropSupply",
];

const values = [
  "Visibility",
  "Proof",
  "Control",
  "Accountability",
  "Agronomy knowledge",
  "Cost tracking",
  "Yield forecasting",
  "Traceability",
  "Buyer access",
  "Better decisions",
];

export default function VsSpreadsheets() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why not just use spreadsheets?
          </h2>
          <p className="text-base text-gray-500">
            Spreadsheets only record information. MazaoHub manages the actual
            farming process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              A spreadsheet can say:
            </div>
            <div className="text-2xl font-semibold text-gray-400 italic text-center py-8">
              &ldquo;Fertilizer applied.&rdquo;
            </div>
          </div>

          <div className="bg-[#E1F5EE] rounded-2xl p-6 border border-[#9FE1CB]">
            <div className="text-sm font-medium text-[#085041] uppercase tracking-wide mb-3">
              MazaoHub shows you:
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1D9E75] font-medium flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-base font-medium text-gray-700 mb-1">
            That is why customers pay.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {values.map((v) => (
              <span
                key={v}
                className="text-[10px] font-medium bg-[#E1F5EE] text-[#085041] px-3 py-1.5 rounded-full"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
