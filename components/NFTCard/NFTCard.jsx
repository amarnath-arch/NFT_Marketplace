import React, { useState } from 'react'

import Style from "./nftcard.module.css";
import Image from 'next/image';

import images from "../../img";
import { AiFillHeart, AiOutlineHeart, AiOutlineLike } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

const NFTCard = () => {
    const [like, setLike] = useState(true);


    const featureArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3

    ];
    
    
    const likeNFT = () => {
        if(!like){
            setLike(true);
        }else{
            setLike(false);
        }
    }


  return (
    <div className={Style.nftCard}>
        {
            featureArray.map((el,i)=>(
                <div className={Style.nftCard_box} key={i+1}>
                    <div className={Style.nftCard_box_img} >
                        <Image
                            src={el}
                            // width={400}
                            height={400}
                            alt="nftImage"
                            className={Style.nftCard_box_img_img}
                            style={{width:"100%"}}
                        />
                    </div>

                    <div className={Style.nftCard_box_update}>
                        <div className={Style.nftCard_box_update_left}>
                            <div className={Style.nftCard_box_update_left_like} onClick={() => likeNFT()}>
                                {
                                    like ? (
                                    <AiOutlineHeart />
                                    ) : (
                                    <AiFillHeart
                                     className={Style.nftCard_box_update_left_like_icon}
                                    />
                                    )
                                }
                                {""} 22
                            </div>
                        </div>

                        <div className={Style.nftCard_box_update_right}>
                            <div className={Style.nftCard_box_update_right_info}>
                                <small>Remaining Time</small>
                                <p>3h: 15m: 30s</p>
                            </div>
                        </div>
                    </div>


                    <div className={Style.nftCard_box_update_details}>
                        <div className={Style.nftCard_box_update_details_price}>
                            <div className={Style.nftCard_box_update_details_price_box}>
                                <h4>Clone #17373</h4>
                                
                                <div className={Style.nftCard_box_update_details_price_box_box}>
                                    <div className={Style.nftCard_box_update_details_price_box_bid}>
                                        <small>Current Bid</small>
                                        <p>1.000 ETH</p>
                                    </div>
                                    <div className={Style.nftCard_box_update_details_price_box_stock}>
                                        <small>61 in stock</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={Style.nftCard_box_update_details_category}>
                            <BsImages />
                        </div>


                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NFTCard