import React from "react";
import "./style.css";
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Service from './components/Service'
import About from './components/About'
import Price from './components/Price'


export default function App() {
  return (
    <>
    <Topbar />
    <Navbar />
    <About/>
    <Price />
    <Service />
    <Footer />
    </>
  );
}
