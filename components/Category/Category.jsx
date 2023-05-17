import React from 'react'

import Style from "./category.module.css";
import {BsCircleFill} from "react-icons/bs";
import Image from 'next/image';
import images from "../../img";

const Category = () => {
    const categoryArray = [1,2,3,4,5,6];

  return (

    <div className={Style.box_category}>
        <div className={Style.category}>
        {
            categoryArray.map((el,i)=>(
                <div className={Style.category_box} key={i+1}>
                    <Image 
                        src={images.creatorbackground1}
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