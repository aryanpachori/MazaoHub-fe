"use client";

import { useState } from "react";

const smallholderFeatures = [
  "Farm planning",
  "Activity tracking",
  "Soil test results",
  "Harvest estimate",
  "Mobile app",
  "Swahili + English",
];

const growthFeatures = [
  "All smallholder features",
  "Agronomist module",
  "Contract farming management",
  "Input tracking",
  "CropSupply integration",
  "Stage dashboard",
  "Custom reports",
  "Priority support",
];

const enterpriseFeatures = [
  "Everything in Growth",
  "Government / NGO dashboards",
  "Bank credit scoring API",
  "Input demand intelligence",
  "National crop intelligence",
  "Dedicated success manager",
  "SLA guarantee",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const growthPrice = annual ? 159 : 199;

  return (
    <section className="bg-white py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-3 text-gray-900">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-gray-500 text-center mb-4">
          Pay per farmer, per season. No hidden fees.
        </p>

        <div className="flex justify-center mb-4">
          <div className="bg-[#F5F4F0] rounded-full p-1 flex items-center text-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                !annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Annual (save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <div className="text-sm font-medium text-gray-500 mb-2">
              Smallholders / Farm Clinics
            </div>
            <div>
              <span className="text-4xl font-semibold text-gray-900">$2–$5</span>
            </div>
            <div className="text-sm text-gray-500 mt-1 mb-1">per farmer per season</div>
            <div className="text-xs text-gray-400 mb-6">
              Paid through cooperatives, NGOs, or Farm Clinics.
            </div>
            <ul className="space-y-2 mb-8">
              {smallholderFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#0F6E56]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#book-a-call"
              className="block w-full text-center border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-medium hover:border-[#0F6E56] transition-colors"
            >
              Talk to us
            </a>
          </div>

          <div className="bg-[#0F6E56] text-white rounded-3xl p-8 relative">
            <span className="absolute top-4 right-4 text-[9px] bg-white text-[#0F6E56] px-2 py-1 rounded-full font-medium">
              Most popular
            </span>
            <div className="text-sm opacity-70 mb-2">Cooperatives / Processors</div>
            <div>
              <span className="text-4xl font-semibold">${growthPrice}</span>
              <span className="text-sm opacity-70">/month</span>
            </div>
            <div className="text-sm opacity-70 mt-1 mb-6">Up to 500 farmers</div>
            <ul className="space-y-2 mb-8">
              {growthFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-white">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#book-a-call"
              className="block w-full text-center bg-white text-[#0F6E56] py-2.5 rounded-xl text-sm font-medium"
            >
              Start free trial
            </a>
          </div>

          <div className="bg-[#F5F4F0] border border-gray-200 rounded-3xl p-8">
            <div className="text-sm font-medium text-gray-500 mb-2">
              Enterprise (banks, govts, NGOs, plantations)
            </div>
            <div className="text-4xl font-semibold text-gray-900">Custom</div>
            <div className="text-sm text-gray-500 mt-1 mb-6">
              Based on program size, regions, farmers, modules, integrations
            </div>
            <ul className="space-y-2 mb-8">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#0F6E56]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#book-a-call"
              className="block w-full text-center bg-[#0F6E56] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#085041] transition-colors"
            >
              Contact sales
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
          Pricing adapts to your use case. Individual farmers pay per season.
          Farm Clinics pay per active farmer. Processors pay per contract farming
          project. Banks and governments pay enterprise rates based on program
          size. All plans include a 30-day free trial.
        </p>
      </div>
    </section>
  );
}
