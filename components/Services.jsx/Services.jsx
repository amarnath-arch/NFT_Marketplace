import React from 'react'

import Style from "./services.module.css";
import Image from 'next/image';
import images from "../../img";

const Services = () => {
    const services=[
        {
            "src": images.service1,
            "alt": "Filter & Discover",
            "step": "step1",
            "heading":"Filter & Discover",
            "p": "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money"
        },
        {
            src: images.service2,
            alt: "Filter & Discover",
            step: "step1",
            heading:"Filter & Discover",
            p: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money"
        },
        {
            src: images.service3,
            alt: "Connect Wallet",
            step: "step1",
            heading:"Connect Wallet",
            p: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money"
        },
        {
            src: images.service4,
            alt: "Start trading",
            step: "step1",
            heading:"Start trading",
            p: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money"
        }

    ];



  return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            {
                services.map((el,i)=>(
                        <div className={Style.service_box_item} key={i+1}>
                            <Image src={el.src} alt={el.alt} width={100} height={100} />
                            <p className={Style.service_box_item_step}><span>{el.step}</span></p>
                            <h3>{el.heading}</h3>
                            <p>{el.p}</p>
                        </div>  
                ))
            }

        </div>

    </div>
  )
}

export default Services