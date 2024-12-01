import { useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import PricingSection from "./pages/Pricing";
import PromotionalBanner from "./pages/PromotionalBanner";
import TermsOfUse from "./pages/Terms_of_Use";
import FAQs from "./pages/FAQ";
import PrivacyPolicy from "./pages/Privacy_Policy";
import Gallery from "./pages/Gallery";

export default function App() {
  const [isBannerVisible, setBannerVisible] = useState(true); // Track banner visibility
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    heroRef,
    aboutRef,
    servicesRef,
    testimonialsRef,
    pricingRef,
    contactRef,
  };

  const scrollToSection = (refName) => {
    refs[refName]?.current.scrollIntoView({ behavior: 'smooth' });
  };

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Optional: Promotional Banner */}
      {/* {isBannerVisible && (
        <PromotionalBanner onClose={() => setBannerVisible(false)} />
      )} */}

      {/* Navbar is always visible */}
      <Navbar scrollToSection={scrollToSection} className={isBannerVisible ? "mt-[56px] md:mt-[64px]" : ""} />

      <div className="flex-1">
        {isMainPage && (
          <>
            <section ref={heroRef}>
              <HeroSection />
            </section>
            <section ref={aboutRef}>
              <AboutUs />
            </section>
            <section ref={servicesRef}>
              <Services />
            </section>
            <section ref={testimonialsRef}>
              <Testimonials />
            </section>
            <section ref={pricingRef} className="mb-5">
              <PricingSection />
            </section>
            <section ref={contactRef}>
              <ContactUs />
            </section>
          </>
        )}
      </div>

      {/* Routes and Footer */}
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/faq" element={<><FAQs /><Footer /></>} />
        <Route path="/terms" element={<><TermsOfUse /><Footer /></>} />
        <Route path="/privacy" element={<><PrivacyPolicy /><Footer /></>} />
        <Route path="/about-us" element={<><AboutUs /><Footer /></>} />
        <Route path="/services" element={<><Services /><Footer /></>} />
        <Route path="/testimonials" element={<><Testimonials /><Footer /></>} />
        <Route path="/pricing" element={<><PricingSection /><Footer /></>} />
        <Route path="/gallery" element={<><Gallery /><Footer /></>} />
        <Route path="/contact-us" element={<><ContactUs /><Footer /></>} />
      </Routes>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/17786973322?text=I%20would%20like%20to%20enroll%20in%20the%20classes" // Replace with your own WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </div>
  );
}
