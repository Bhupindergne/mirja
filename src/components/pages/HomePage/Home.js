import React from "react";
import HeroSection from "../../HeroSection";
import Footer from "../Footer/Footer";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Footer />
    </>
  );
}

export default Home;
