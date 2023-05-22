import React from 'react'

import Style from "./brand.module.css";

import Image from 'next/image';
import images from "../../img";

import { Button } from '../componentindex';

const Brand = () => {
  return (
    <div className={Style.brand}>
        <div className={Style.brand_box}>
            <div className={Style.brand_box_left}>
                <Image src={images.logo} alt='brand logo' height={100} width={100} />
                <h1>Earn Free Crypto with Epicenter</h1>
                <p> World's best NFT Marketplace </p>
                <div className={Style.brand_box_left_button}>
                    <Button btnName={"Create"} handleClick={()=>{}} />
                    <Button btnName={"Discover"} handleClick={()=>{}} />
                </div>
            </div>

            <div className={Style.brand_box_right}>
                <Image
                    src={images.earn}
                    alt='brand logo'
                    height={600}
                    width={800}
                />
            </div>

        </div>
    </div>
  )
}

export default Brand