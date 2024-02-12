import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Experience from "./components/experience";

export default function Home() {

  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}