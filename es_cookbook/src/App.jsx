import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CookBookNavbar from "./components/CookBookNavbar";
import Footer from "./components/Footer";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <>
      <CookBookNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
