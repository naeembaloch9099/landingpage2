import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import Features from "./components/Features";
import News from "./components/News";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Recommendations />
      <Features />
      <Categories />
      <News />
      <Footer />
    </div>
  );
}

export default App;
