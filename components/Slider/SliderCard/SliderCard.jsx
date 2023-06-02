import React from 'react'

import Style from './sliderCard.module.css';
import images from "../../../img";
import Image from 'next/image';

import {motion} from 'framer-motion';
import LikeProfile from '@/components/LikeProfile/LikeProfile';

const SliderCard = ({el,i}) => {
  return (
    <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
            <motion.div className={Style.sliderCard_box_img}>
                <Image src={el.background} 
                    alt='slider profile'
                    className={Style.sliderCard_box_img_img}
                    width={343}
                    height={230}
                    objectFit='cover'
                />
            </motion.div>
            <div className={Style.sliderCard_box_title}>
                <p>NFT Video #1245</p>
                <div className={Style.sliderCard_box_title_like}>
                    <LikeProfile />
                    <small>1 of 100</small>
                </div>
            </div>

            <div className={Style.sliderCard_box_price}>
                <div className={Style.sliderCard_box_price_box}>
                    <small>Current Bid</small>
                    <p>1.00ETH</p>
                </div>

                <div className={Style.sliderCard_box_price_time}>
                    <small>Remaining Time</small>
                    <p>3h: 15m: 30s</p>
                </div>

            </div>
        </div>
    </motion.div>
  )
}

export default SliderCard