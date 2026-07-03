const steps = [
  {
    title: "Join MazaoHub",
    body: "Create your account. Add your organisation, team members, and farmers. Set up takes under 30 minutes.",
  },
  {
    title: "Register farmers and farms",
    body: "Add farmer profiles, farm locations, GPS coordinates, soil test results, and crop plans.",
  },
  {
    title: "Track every farming stage",
    body: "Log daily activities, inputs, costs, agronomist visits, disease alerts, and photos — per stage, per farm.",
  },
  {
    title: "Get harvest intelligence",
    body: "MazaoHub generates yield forecasts from farm size, soil data, and activity progress. Know what's coming before it arrives.",
  },
  {
    title: "Connect to CropSupply",
    body: "Verified farm production feeds directly into CropSupply. Buyers, processors, and exporters source your supply before harvest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-3 text-gray-900">
          How MazaoHub works
        </h2>
        <p className="text-lg text-gray-500 text-center mb-16">
          Set up in minutes. Results from day one.
        </p>

        <div className="flex flex-col gap-0 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-6 items-start relative">
              <div className="w-10 h-10 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-sm font-medium flex-shrink-0 z-10">
                {i + 1}
              </div>
              {i !== steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-100" />
              )}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F5F4F0] rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-base font-medium text-gray-800 mb-1">
            Works offline, on mobile, in Swahili and English.
          </p>
          <p className="text-sm text-gray-500">
            MazaoHub runs on basic Android phones. No reliable internet required.
            Data syncs when connection is available.
          </p>
        </div>
      </div>
    </section>
  );
}
