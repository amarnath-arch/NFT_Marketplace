import React from 'react'
import Style from "./footer.module.css";

import Image from 'next/image';

import images from "../../img";
import {RiSendPlaneFill} from "react-icons/ri"
import { Discover,HelpCenter } from '../NavBar';
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';



const Footer = () => {
  return (
    <div className={Style.footer}>
        <div className={Style.footer_box}>
            <div className={Style.footer_box_social}>
                <Image src={images.logo} alt='footer logo' height={100} width={100} />
                <p>Discover the most oustanding articles on all topics of NFT of your own stories and share them</p>

                <div className={Style.footer_social}>
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
                        <TiSocialYoutube />
                    </a>
                    <a href='#'>
                        <TiSocialInstagram />
                    </a>

                </div>
            </div>

            <div className={Style.footer_discover}>
                <h3>Discover</h3>
                <Discover />
            </div>

            <div className={Style.footer_help}>
                <h3>Help Center</h3>
                <HelpCenter />
            </div>
            

            <div className={Style.subscribe}>
                <h3>Subscribe</h3>
                <div className={Style.subscribe_box}>
                    <input type='email' placeholder='Enter your email' />
                    <RiSendPlaneFill className={Style.subscribe_box_send} />
                </div>
                <div className={Style.subscribe_box_info}>
                    <p>
                        Discover, collect and sell extraordinary NFTs on the largest NFT Marketplace.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer