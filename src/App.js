import Hero from "./components/Hero";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
