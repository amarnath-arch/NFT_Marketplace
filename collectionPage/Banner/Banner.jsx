import React from 'react'

import Style from "./Banner.module.css";
import Image from 'next/image';
import images from "../../img";

const Banner = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
        <div className={Style.banner_img}>
            <Image
                src={bannerImage}
                // width={1522}
                height={300}
                alt='background'
                style={{ objectFit: 'cover', width: '100%'}}

            />
            {/* <Image
                 src={images.nft_image_1}
                 alt='nft image'
                 width={800}
                 height={800}
                /> */}
        </div>

        <div className={Style.banner_mobile_img}>
            <Image
                src={bannerImage}
                height={350}
                alt='background'
                style={{ objectFit: 'cover', width: '100%'}}

            />
        </div>

    </div>
  )
}

export default Banner