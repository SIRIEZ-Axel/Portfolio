import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";
import Intro from "./assets/Components/Intro";
import Projects from "./assets/Components/Project";
import './index.css'

function App() {
  return (
    <div className="App bg-gray-50 dark:bg-slate-800 duration-500">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
