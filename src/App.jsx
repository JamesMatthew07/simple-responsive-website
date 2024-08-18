import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Workflow from "./components/Workflow";
import './index.css';

function App() {
  return (
<>
    <Navbar></Navbar>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection></HeroSection>
    </div>
    <FeatureSection></FeatureSection>
    <Workflow></Workflow>
    <Pricing></Pricing>
    <Testimonial></Testimonial>
    <Footer/>
</>
  );
}

export default App
