import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="max-w-[1930px]">
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
