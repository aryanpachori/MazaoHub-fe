const columns = [
  {
    title: "Product",
    links: [
      "Farm Management",
      "Soil Testing",
      "Agronomist Module",
      "Harvest Forecasting",
      "Mobile App",
      "Offline Mode",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Processors",
      "Cooperatives",
      "NGOs & Governments",
      "Banks",
      "Input Companies",
      "Farm Clinics",
    ],
  },
  {
    title: "Company",
    links: ["About", "CropSupply", "Blog", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#085041] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold mb-2">MazaoHub</div>
            <p className="text-sm opacity-60 mb-4">
              The agriculture operating system for East Africa.
            </p>
            <p className="text-sm opacity-70">info@mazaohub.com</p>
            <p className="text-sm opacity-70">+255 655 973248</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-medium mb-3">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex justify-between flex-wrap gap-2 text-[11px] opacity-40">
          <span>© 2026 MazaoHub. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
