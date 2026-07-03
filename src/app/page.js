import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Modules from "@/components/Modules";
import Product from "@/components/Product";
import Segments from "@/components/Segments";
import BeforeAfter from "@/components/BeforeAfter";
import VsSpreadsheets from "@/components/VsSpreadsheets";
import Metrics from "@/components/Metrics";
import HowItWorks from "@/components/HowItWorks";
import UserJourney from "@/components/UserJourney";
import CropSupplySection from "@/components/CropSupplySection";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import BookACall from "@/components/BookACall";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Product />
        <Segments />
        <BeforeAfter />
        <VsSpreadsheets />
        <Metrics />
        <HowItWorks />
        <UserJourney />
        <CropSupplySection />
        <Pricing />
        <SocialProof />
        <BookACall />
      </main>
      <Footer />
    </>
  );
}
