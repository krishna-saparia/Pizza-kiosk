import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
// import "./App.css";
// import Navbar from "./components/NavBar";
import { GlobalStyle } from "./GlobStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Navbar /> */}
      <Hero />
    </Router>
  );
}

export default App;
