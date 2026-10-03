import SmoothScroll from "./components/SmoothScroll.jsx";
import Cursor from "./components/Cursor.jsx";
import IntroCurtain from "./components/IntroCurtain.jsx";
import Nav from "./components/Nav.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Gallery from "./components/Gallery.jsx";
import Education from "./components/Education.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <IntroCurtain />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Certifications />
        <CaseStudies />
        <Gallery />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
