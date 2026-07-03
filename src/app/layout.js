import "./globals.css";

export const metadata = {
  title: "MazaoHub — The Agriculture Operating System for East Africa",
  description:
    "MazaoHub helps processors, cooperatives, NGOs, banks, and governments manage crop production from field inspection to harvest — and connect verified supply to global buyers through CropSupply.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-gray-900 antialiased">{children}</body>
    </html>
  );
}
