import "./App.css";
import GenerateTitle from "./components/TitleGenerator";
import Navbar from "./components/nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GenerateTitle />
    </div>
  );
}

export default App;
