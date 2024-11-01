import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/HeaderDesktop'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Coder from "./components/pages/Coder";
import Creative from "./components/pages/Creative";
import Contact from "./components/pages/Contact";
import Funhouse from "./components/pages/Funhouse";

import './App.css?v=1'
import SlideOutMenu from "./components/Components/SlideOutMenu";
import HeaderDesktop from "./components/pages/HeaderDesktop";
import HeaderMobile from "./components/pages/HeaderMobile";
import BlobMouse from "./components/Components/BlobMouse";
import Footer from "./components/pages/Footer";

function App() {
    return (
        <Router>
            <SlideOutMenu/>
            {/*<Header/>*/}
            <HeaderDesktop/>
            <HeaderMobile/>

            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/creative" element={<Creative/>}/>
                    <Route path="/coder" element={<Coder/>}/>
                    <Route path="/funhouse" element={<Funhouse/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
            {/*<BlobMouse />*/}
            <Footer />
        </Router>
    );
}

export default App;
