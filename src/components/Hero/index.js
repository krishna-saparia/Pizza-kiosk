import React from "react";
import Navbar from "../NavBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElement";
const Hero = () => {
  return (
    <div id='Hero'>
      <HeroContainer>
        <Navbar />
        <HeroContent>
          <HeroItems>
            <HeroH1> Make Your Pizza Now...</HeroH1>
            <HeroP> Prepare in 60 seconds</HeroP>
            <HeroBtn
              to="product"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={60}
            >
              Place Order
            </HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
