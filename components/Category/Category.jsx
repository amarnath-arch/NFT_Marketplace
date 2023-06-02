import React from 'react'

import Style from "./category.module.css";
import {BsCircleFill} from "react-icons/bs";
import Image from 'next/image';
import images from "../../img";

const Category = () => {
    const categoryArray = [
        {
            background: images.creatorbackground5,
            user:   images.user5
        },
        {
            background: images.creatorbackground8,
            user:   images.user8
        },
        {
            background: images.creatorbackground3,
            user:   images.user3
        },
        {
            background: images.creatorbackground9,
            user:   images.user9
        },
        {
            background: images.creatorbackground6,
            user:   images.user6
        },
        {
            background: images.creatorbackground1,
            user:   images.user1
        }
    ];

  return (

    <div className={Style.box_category}>
        <div className={Style.category}>
        {
            categoryArray.map((el,i)=>(
                <div className={Style.category_box} key={i+1}>
                    <Image 
                        src={el.background}
                        alt= "background image"
                        className={Style.category_box_img}
                        width={350}
                        height={150}
                        objectFit="cover"
                    />

                    <div className={Style.category_box_title}>
                        <span><BsCircleFill /></span>
                        <div className={Style.category_box_title_info}>
                            <h4>Entertainment</h4>
                            <small>1995 NFTs</small>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
    
  )
}

export default Category