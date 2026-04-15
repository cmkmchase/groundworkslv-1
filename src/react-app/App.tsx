import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import CaseStudies from "./pages/casestudies";
import LawnCare from "./pages/lawncare";
import DebrisRemoval from "./pages/debrisremoval";
import LeavenworthLawnCare from "./pages/leavenworthlawncare";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/lawn-care" element={<LawnCare />} />
        <Route path="/services/debris-removal" element={<DebrisRemoval />} />
        <Route path="/locations/leavenworth-lawn-care" element={<LeavenworthLawnCare />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;