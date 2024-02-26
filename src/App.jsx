import "./App.css";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="main-body">
      <header className="header">
        <img
          src="../src/assets/logo.png"
          alt="CRI Fluid Systems"
          className="header-logo"
        />
      </header>
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
