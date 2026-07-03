const steps = [
  {
    title: "You discover MazaoHub",
    body: "Through our website, CropSupply, a Farm Clinic, agrovet, cooperative, social media, NGO program, or processor contract farming project.",
    tags: ["Website", "CropSupply", "Farm Clinic", "Field event", "NGO program", "Processor project"],
  },
  {
    title: "Book a demo or subscribe",
    body: "Choose the right plan for your use case. Individual farmer, cooperative, processor, NGO, bank, input company, or enterprise.",
    tags: [
      "Farmer",
      "Farm owner",
      "Farm Clinic",
      "Cooperative",
      "Processor",
      "Retail chain",
      "Bank",
      "NGO / Govt",
      "Input company",
    ],
  },
  {
    title: "Onboarding starts",
    body: "MazaoHub collects basic data about your organisation, farmers, farms, crops, locations, and goals. Setup time: 1 day to 6 weeks depending on scale.",
    tags: [
      "Same day (individual)",
      "1–7 days (farm owner)",
      "1–2 weeks (cooperative)",
      "2–6 weeks (processor)",
      "Phased (government)",
    ],
  },
  {
    title: "Data setup",
    body: "The system sets up users, farms, crops, seasons, stages, input recommendations, agronomist access, dashboards, reports, and CropSupply connection.",
  },
  {
    title: "Team starts using",
    body: "Farmers, farm managers, workers, agronomists, and field officers start updating activities daily. Stage progress, costs, inputs, diseases, photos, and yield estimates.",
  },
  {
    title: "Insights and CropSupply activation",
    body: "As data grows, MazaoHub generates farm insights, cost reports, yield forecasts, risk alerts, and buyer-ready supply. CropSupply connects that supply to market.",
  },
];

export default function UserJourney() {
  return (
    <section className="bg-[#F5F4F0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Your journey with MazaoHub
          </h2>
          <p className="text-lg text-gray-500">
            From discovery to your first harvest forecast — here is what happens.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-5 border border-gray-100 flex gap-5 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-[#0F6E56] text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                {step.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
