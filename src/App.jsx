import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Charts from "./pages/Charts";
import Contact from './pages/Contact'; // make sure path matches
import LearnMore from './pages/LearnMore';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
