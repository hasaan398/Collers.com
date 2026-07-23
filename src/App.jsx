import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Why from "./components/why/Why";
import GrowCollection from "./components/growcollection/GrowCollection";
import ArticlesAndEventsSection from "./components/articlesend/ArticlesAndEventsSection";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <Why />
        <GrowCollection />
        <ArticlesAndEventsSection />
    </>
  );
}

export default App;