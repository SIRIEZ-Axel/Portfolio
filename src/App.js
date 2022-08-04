import About from "./assets/Components/About/About"
import Contact from "./assets/Components/Contact/Contact"
import Footer from "./assets/Components/Footer/Footer"
import Header from "./assets/Components/navbar-list/Header"
import Intro from "./assets/Components/Hero/Intro"
import Projects from "./assets/Components/Project-tr/Projects";
import './index.css'

function App() {
  return (
    <div className="App bg-gray-50 dark:bg-slate-800 duration-500">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
