import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandShowcase from "./components/BrandShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Projects from "./components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [scrollButton, setScrollButton] = useState("d-none");
  function handleScrollTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollButton("");
      } else {
        setScrollButton("d-none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <Header />
      <Hero />
      <BrandShowcase />
      <WhyChooseUs />
      <Industries />
      <About/>
      <Projects />
      <motion.button
        onClick={handleScrollTop}
        className={`btn scroll-top-button ${scrollButton}`}
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} color="#fff" />
      </motion.button>
      <Footer/>
    </>
  );
}

export default App;
