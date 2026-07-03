const modules = [
  {
    icon: "📋",
    bg: "bg-[#E1F5EE]",
    color: "text-[#0F6E56]",
    title: "Farm Planning",
    body: "AI-assisted farm plans based on crop, location, soil, season, farm size, budget, and expected yield. Includes activity calendar, input plan, cost estimate, and risk notes.",
  },
  {
    icon: "📚",
    bg: "bg-[#E6F1FB]",
    color: "text-[#185FA5]",
    title: "Knowledge Hub",
    body: "Crop guides, pest and disease knowledge, fertilizer guidance, soil improvement, climate-smart practices, and AI-powered advisory support in local language.",
  },
  {
    icon: "🛒",
    bg: "bg-[#FAEEDA]",
    color: "text-[#854F0B]",
    title: "Order Inputs",
    body: "Order seeds, fertilizers, pesticides, herbicides, and irrigation materials based on crop-specific recommendations. Crop-specific input bundles available.",
  },
  {
    icon: "📍",
    bg: "bg-[#E1F5EE]",
    color: "text-[#0F6E56]",
    title: "Daily Activity Tracking",
    body: "The heart of MazaoHub. Track what was done, who did it, when, cost, input used, quantity, photo evidence, GPS location, and agronomist comment — per stage.",
  },
  {
    icon: "🔢",
    bg: "bg-[#EEEDFE]",
    color: "text-[#534AB7]",
    title: "Farming Stage Tracker",
    body: "Track every crop through 19 farming stages — from field inspection to crop storage. Every stage becomes data for analytics and CropSupply.",
  },
  {
    icon: "👩‍🌾",
    bg: "bg-[#E1F5EE]",
    color: "text-[#085041]",
    title: "Agronomist Dashboard",
    body: "Agronomists view assigned farmers, monitor farm stages, give comments, recommend actions, flag risks, track visits, and update yield estimates.",
  },
  {
    icon: "📊",
    bg: "bg-[#E6F1FB]",
    color: "text-[#185FA5]",
    title: "Insights & Analytics",
    body: "Farm progress, stage completion, cost tracking, input use, disease alerts, yield estimates, harvest forecasts, profitability, and buyer readiness — all automated.",
  },
  {
    icon: "🌍",
    bg: "bg-[#E1F5EE]",
    color: "text-[#0F6E56]",
    title: "CropSupply Integration",
    body: "When crop data is ready, MazaoHub pushes it to CropSupply. Buyers, processors, and exporters can source or contract the supply before harvest.",
  },
  {
    icon: "💬",
    bg: "bg-[#FAEEDA]",
    color: "text-[#854F0B]",
    title: "Farmer Forum",
    body: "Farmers learn from each other, ask questions, share experiences, and interact around crops, diseases, inputs, prices, and farming practices.",
  },
];

export default function Modules() {
  return (
    <section className="bg-[#F5F4F0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            9 modules. One connected system.
          </h2>
          <p className="text-lg text-gray-500">
            Everything your farm or farmer network needs — from planning to market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div
              key={m.title}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition-all"
            >
              <div
                className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center text-lg mb-3`}
              >
                {m.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {m.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
