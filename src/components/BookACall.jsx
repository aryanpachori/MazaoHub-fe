"use client";

import { useState } from "react";

export default function BookACall() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "Processor",
    size: "Under 10 farmers",
    notes: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <section className="bg-[#0F6E56] py-20 text-white" id="book-a-call">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Ready to see MazaoHub in action?
          </h2>
          <p className="text-lg opacity-80 mb-6">
            Book a 30-minute demo with our team. We'll show you exactly how
            MazaoHub works for your organisation.
          </p>

          <div className="mb-4">
            {[
              "30-minute video call",
              "No sales pressure",
              "Custom walkthrough for your use case",
            ].map((t) => (
              <div key={t} className="text-sm opacity-90 mb-2">
                ✓ {t}
              </div>
            ))}
          </div>

          <p className="text-sm opacity-60 mt-4">Or email us: info@mazaohub.com</p>
          <p className="text-sm opacity-60">Call: +255 655 973248</p>
        </div>

        <div className="bg-white rounded-3xl p-8 text-gray-900">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-gray-700">
                We'll send you a calendar link within 2 hours. Check your email.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-6">Book a demo</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F6E56]"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F6E56]"
                />
                <input
                  type="text"
                  placeholder="Organisation name"
                  value={form.org}
                  onChange={update("org")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F6E56]"
                />
                <select
                  value={form.role}
                  onChange={update("role")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F6E56]"
                >
                  {[
                    "Processor",
                    "Cooperative",
                    "NGO",
                    "Government",
                    "Bank",
                    "Input Company",
                    "Farm Owner",
                    "Other",
                  ].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <select
                  value={form.size}
                  onChange={update("size")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F6E56]"
                >
                  {[
                    "Under 10 farmers",
                    "10-100",
                    "100-500",
                    "500-2000",
                    "2000+",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Anything specific you want to see?"
                  rows={3}
                  value={form.notes}
                  onChange={update("notes")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F6E56]"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-[#0F6E56] text-white py-3 rounded-xl font-medium hover:bg-[#085041] transition-colors"
                >
                  Book my demo →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
