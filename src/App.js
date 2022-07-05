import About  from "./assets/Components/About";
import Intro from "./assets/Components/Intro";
import Projects from "./assets/Components/Project";
import './index.css'

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
