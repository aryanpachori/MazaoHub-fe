"use client";

import { useState } from "react";

const segments = {
  Processors: {
    label: "Contract Farming Management",
    headline: "See 3,000 contracted farmers. Know which stage each one is at.",
    body: "Processors and off-takers use MazaoHub to manage contracted farmers before harvest. Register farmers, assign crops, track every stage, monitor agronomist visits, and forecast supply volume — all before the crop reaches market.",
    quote:
      "3,000 contracted maize farmers are active. 1,200 are at fertilizer application stage, 800 are at weed control, 600 are at pest control, 300 are preparing for harvest, and expected supply is 8,500 MT.",
    quoteCaption: "— What a processor sees in their MazaoHub dashboard",
    features: [
      "Register contracted farmers",
      "Track input distribution",
      "Monitor every farming stage",
      "Harvest volume forecasting",
      "Push verified supply to CropSupply",
      "Reduce supply risk",
    ],
  },
  Cooperatives: {
    label: "Member Management",
    headline: "Replace member lists with a live production dashboard.",
    body: "Cooperatives use MazaoHub to manage members, track what crops they're growing, see expected harvest volume, and connect them to buyers through CropSupply.",
    features: [
      "Live member activity tracking",
      "Crop and stage visibility",
      "Expected harvest per member",
      "Input needs forecasting",
      "Buyer readiness reports",
      "Traceability records",
    ],
  },
  "Farm Owners": {
    label: "Farm Control Room",
    headline: "Know exactly what's happening on your farm — from anywhere.",
    body: "Mid-size farm owners use MazaoHub as a control room. Track clearing, fertilizer, disease, inputs, costs, and yields from one dashboard.",
    questions: [
      "Was land cleared?",
      "Was fertilizer applied?",
      "Which disease appeared?",
      "Which input was used?",
      "How much money was spent?",
      "What did the agronomist advise?",
      "What stage is the crop in?",
      "What yield is expected?",
      "Is the farm making profit or loss?",
    ],
    features: [
      "Activity log per farm worker",
      "Input and cost tracking",
      "Disease and pest records",
      "Agronomist advice log",
      "Profit and loss per season",
      "Yield forecast per crop",
    ],
  },
  Smallholders: {
    label: "Digital Farm Assistant",
    headline: "What to do, when to do it, what input to use, where to sell.",
    body: "Smallholder farmers access MazaoHub through Farm Clinics and cooperatives. They get farm planning, soil testing, agronomy advice, and market linkage.",
    features: [
      "Farm planning per season",
      "Soil testing and NPK results",
      "Input recommendations",
      "Stage-by-stage guidance",
      "Harvest estimates",
      "CropSupply market access",
    ],
  },
  "NGOs & Govts": {
    label: "National Agriculture Intelligence",
    headline: "Turn farmer programs into measurable, data-backed outcomes.",
    body: "NGOs and governments use MazaoHub for subsidy tracking, extension services, food security programs, and national crop intelligence across regions.",
    features: [
      "Farmer registration at scale",
      "Crop and input data",
      "Regional production visibility",
      "Program impact reports",
      "Food security forecasting",
      "Government dashboard",
    ],
  },
  Banks: {
    label: "Agriculture Credit Intelligence",
    headline: "Lend to farmers with verified farm data, not guesswork.",
    body: "Banks use MazaoHub to reduce agriculture lending risk. Verified farm records, soil data, activity progress, and harvest forecasts replace paperwork.",
    features: [
      "Verified farmer records",
      "Farm location and GPS",
      "Crop plan and soil data",
      "Activity-based credit scoring",
      "Harvest forecast as collateral",
      "Buyer linkage proof",
    ],
  },
  "Input Companies": {
    label: "Input Demand Intelligence",
    headline: "Know what farmers need before they ask.",
    body: "Seed, fertilizer, pesticide, and machinery companies use MazaoHub to understand real input demand by crop, region, and farming stage.",
    features: [
      "Crop planting data by region",
      "Stage-based input demand signals",
      "Dealer stock intelligence",
      "Product performance in field",
      "Sales channel optimization",
    ],
  },
  "Retail Chains": {
    label: "Traceable Produce Sourcing",
    headline: "Consistent, quality-controlled supply before it reaches shelves.",
    body: "Retail chains contract farmers to produce specific crops and use MazaoHub to monitor production quality, timing, and traceability.",
    features: [
      "Contract farmer management",
      "Quality control per stage",
      "Harvest timing forecast",
      "Farmer performance tracking",
      "Traceability to farm level",
    ],
  },
  Plantations: {
    label: "Estate Management",
    headline: "One system for blocks, workers, inputs, costs, and harvest.",
    body: "Large farms and plantations manage multiple blocks, teams, and seasons. Track tasks, control costs, forecast yields, and prove compliance.",
    features: [
      "Multi-farm management",
      "Block-level tracking",
      "Worker task assignment",
      "Cost control per activity",
      "Compliance documentation",
    ],
  },
  "Farm Clinics": {
    label: "Farmer Service Business",
    headline: "Manage 500 farmers from one dashboard.",
    body: "Farm Clinics and agrovets use MazaoHub to register farmers, create plans, track stages, give advice, recommend inputs, and link to CropSupply.",
    features: [
      "Farmer registration",
      "Farm plan creation",
      "Stage monitoring",
      "Agronomy advice log",
      "Input sales tracking",
      "CropSupply linkage",
    ],
  },
};

const tabs = Object.keys(segments);

export default function Segments() {
  const [activeTab, setActiveTab] = useState("Processors");
  const active = segments[activeTab];

  return (
    <section className="bg-[#F5F4F0] py-20" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
          Built for every player in the agrifood chain
        </h2>
        <p className="text-lg text-gray-500 text-center mb-12">
          One platform, ten customer types, one connected system.
        </p>

        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                activeTab === tab
                  ? "bg-[#0F6E56] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#0F6E56]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-wide font-medium bg-[#E1F5EE] text-[#085041] px-2 py-1 rounded-full mb-4">
                {active.label}
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {active.headline}
              </h3>
              <p className="text-gray-600 mb-4">{active.body}</p>
              {active.quote && (
                <div className="bg-[#F5F4F0] rounded-xl p-4 italic text-sm text-gray-700 border-l-4 border-[#0F6E56] my-4">
                  "{active.quote}"
                  {active.quoteCaption && (
                    <div className="text-[10px] text-gray-400 not-italic mt-2">
                      {active.quoteCaption}
                    </div>
                  )}
                </div>
              )}
              {active.questions && (
                <div className="flex flex-wrap gap-2 my-4">
                  {active.questions.map((q) => (
                    <span
                      key={q}
                      className="text-[10px] bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              )}
              <a
                href="#book-a-call"
                className="inline-block mt-6 bg-[#0F6E56] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#085041] transition-colors"
              >
                Start with {activeTab} →
              </a>
            </div>

            <div>
              <ul className="space-y-2">
                {active.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-[#0F6E56]">✓</span>
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
