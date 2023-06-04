import React from 'react'

import Style from "./collectionProfile.module.css";
import Image from 'next/image';
import images from "../../img";

import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';


const CollectionProfile = () => {
    const cardArray = [1,2,3,4];


  return (
    <div className={Style.collectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <Image
                 src={images.nft_image_1}
                 alt='nft image'
                //  width={800}
                //  height={800}
                 className={Style.collectionProfile_box_left_img}
                 style={{width: "100%"}}
                />

                <div className={Style.collectionProfile_box_left_social}>
                    <a href='#'>
                        <TiSocialFacebook />
                    </a>
                    <a href='#'>
                        <TiSocialLinkedin />
                    </a>
                    <a href='#'>
                        <TiSocialTwitter />
                    </a>
                    <a href='#'>
                        <TiSocialInstagram />
                    </a>

                </div>

            </div>


            <div className={Style.collectionProfile_box_middle}>
                <h1>Awesome NFTs Collection</h1>
                <p>
                    Karafuru is home to 5,555 generative arts where colors reign
                    supreme. Leave the drab reality and enter the world of Karafuru by
                    Museum of Toys.
                </p>
                <div className={Style.collectionProfile_box_middle_box}>
                    {
                        cardArray.map((el,i) => (
                            <div className={Style.collectionProfile_box_middle_box_item} key={i+1}>
                                <small>Floor Price</small>
                                <p>{i+1}95,4683</p>
                                <span>+ {i+2}.11%</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            

            

        </div>


    </div>
  )
}

export default CollectionProfile