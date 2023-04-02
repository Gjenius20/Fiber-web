import "./App.scss";
import FirstSection from "./Components/FirstSection";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <FirstSection />
        </div>
    );
}

export default App;
