import "./App.css";
import BlogSection from "./Pages/BlogSection.js";
import ContactSection from "./Pages/ContactSection.js";
import CTASection from "./Pages/CTASection.js";
import FAQSection from "./Pages/FAQSection.js";
import FooterSection from "./Pages/Footer.js";
import Header from "./Pages/Header.js";
import HeroSection from "./Pages/HeroSection.js";
import OffersSection from "./Pages/OffersSection.js";
import PartnersSection from "./Pages/PartnersSection.js";
import PropertyListings from "./Pages/PropertyListings.js";
import SubscribeSection from "./Pages/SubscribeSection.js";
import Testimonials from "./Pages/Testimonials.js";
import WhyChooseUs from "./Pages/WhyChooseUs.js";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <PropertyListings/>
      <WhyChooseUs/>
      <Testimonials/>
      <BlogSection/>
      <CTASection/>
      <SubscribeSection/>
      <PartnersSection/>
      <ContactSection/>
      <FAQSection/>
      <OffersSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
