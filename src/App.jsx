import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { ContainerFluid } from './components/ContainerFluid.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { SectionFive } from './components/SectionFive.jsx';
import { ProductDemo } from './components/ProductDemo.jsx';
import { TopProducts } from './components/TopProducts.jsx';
import { PricingPlans } from './components/PricingPlans.jsx';
import { Blog } from './components/Blog.jsx';
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";

import Navbar from "./components/Navbar.jsx";
import Trade from "./components/pages/Trade.jsx";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <ServicesSection />
                        <SectionFive />
                        <ContainerFluid />
                        <ProductDemo />
                        <TopProducts />
                        <PricingPlans />
                        <Blog />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />\
                <Route path="/trade" element={<Trade />} />
            </Routes>
        </div>
    );
}

export default App;