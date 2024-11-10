import React, {   Suspense } from "react";
import Loader from "./components/loader/Loader";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Banner from "./components/home/Home"
function Home() {


  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Banner />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />
      </Suspense>
    </div>
  );
}

export default Home;
