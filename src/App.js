import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import { BrowserRouter } from "react-router-dom";
import Events from "./components/events/Events";
import Feedback from "./components/feedback/Feedback";
import Menu from "./components/menu/Menu";
import Statistics from "./components/statistics/Statistics";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <About />
      <Statistics />
      <Events />
      <Feedback />
      <Menu />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
