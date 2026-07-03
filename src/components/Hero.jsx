const stats = [
  { value: "555K+", label: "farmers registered" },
  { value: "260K+", label: "farm data records" },
  { value: "644K+", label: "soil tests" },
  { value: "14", label: "Tanzania regions" },
];

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-16" id="product">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
            <span className="text-sm text-[#0F6E56] font-medium">
              Used by 555K+ farmers across East Africa
            </span>
          </div>

          <h1 className="text-5xl font-semibold text-gray-900 leading-tight mb-6">
            See the crop before the market sees it.
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            MazaoHub is the stage-based agriculture operating system that tracks
            crops from field inspection to crop storage, converts farm activities
            into harvest intelligence, and connects verified supply to buyers
            through CropSupply.
          </p>

          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="#pricing"
              className="bg-[#0F6E56] text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-[#085041] transition-colors"
            >
              Start free trial →
            </a>
            <a
              href="#book-a-call"
              className="border border-gray-200 text-sm text-gray-700 px-6 py-3 rounded-xl hover:border-[#0F6E56] hover:text-[#0F6E56] transition-colors"
            >
              Book a 30-min demo
            </a>
            <span className="text-sm text-gray-500 flex items-center gap-1.5">
              ✓ No credit card required · Free 30-day trial
            </span>
          </div>

          <div className="flex gap-6 mt-8 pt-8 border-t border-gray-100 flex-wrap">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#0F6E56] rounded-3xl p-6 text-white">
            <div className="text-xs opacity-60 uppercase tracking-wide mb-4">
              Live farm intelligence
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>3,000 farmers active</span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-white rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>Stage 14 — Pest control</span>
                  <span className="opacity-70">14/19</span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "74%" }} />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span>Expected harvest: 8,500 MT</span>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">
                  High confidence
                </span>
              </div>
            </div>

            <div className="border-t border-white/20 mt-5 pt-3">
              <p className="text-xs opacity-50">
                Powered by MazaoHub · Connected to CropSupply
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-3">
            Works offline · Mobile + Web · Swahili + English
          </p>
        </div>
      </div>
    </section>
  );
}
