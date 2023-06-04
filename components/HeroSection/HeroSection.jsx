import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./heroSection.module.css";
import { Button } from "../componentindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            // width={600}
            // height={600}
            className={Style.heroSection_box_right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;