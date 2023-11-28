import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Card";
import Footer from "../Footer/Footer";
import { homeObjOne } from "./Data";

function Resources() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <Footer />
    </>
  );
}

export default Resources;
