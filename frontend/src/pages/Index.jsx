import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import AppDownload from "@/components/AppDownload";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="about">
          <About />
        </div>
        <WhyChooseUs />
        <AppDownload />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;