
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
 
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import News from "./components/sections/News";
import Careers from "./components/sections/Careers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <News />
      <Careers />
      <Footer />
    </>
  );
}
