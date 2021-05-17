import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Index";
import Hero from "./components/Hero";
import Products from "./components/Products/Index";
// import "./App.css";
// import Navbar from "./components/NavBar";
import { GlobalStyle } from "./GlobStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favourite Pizza" />
      <Footer/>
    </Router>
  );
}

export default App;
