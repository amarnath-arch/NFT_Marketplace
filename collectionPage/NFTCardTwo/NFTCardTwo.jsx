import React,{useState} from 'react'

import Style from "./nftCardTwo.module.css";
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import Image from 'next/image';
import LikeProfile from '@/components/LikeProfile/LikeProfile';
import { MdTimer } from 'react-icons/md';

const NFTCardTwo = ({nftData}) => {
    const [like, setLike] = useState(false);
    const [incLike, setIncLike]= useState(21);


    const likeNFT = () => {
        const likes_caught = incLike;

        if(!like){
            setLike(true);
            setIncLike(likes_caught - 1 );

        }else{
            setLike(false);
            setIncLike(likes_caught + 1);
        }
    }


  return (
    <div className={Style.nftCardTwo}>
        {
            nftData.map((el,i)=>(
                <div className={Style.nftCardTwo_box} key={i+1}>
                    <div className={Style.nftCardTwo_box_like}>
                        <div className={Style.nftCardTwo_box_like_box}>
                            <div className={Style.nftCardTwo_box_like_box_box}>
                                <BsImage className={Style.nftCardTwo_box_like_box_box_icon} />
                                <p>
                                    {
                                        like ? 
                                        <AiOutlineHeart  onClick={() => likeNFT()} /> :
                                         <AiFillHeart  onClick={() => likeNFT()} />
                                    }{""}
                                    <span>{incLike + 1}</span>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className={Style.nftCardTwo_box_img}>
                        <Image
                            src={el}
                            alt='nft'
                            // height={500}
                            // width={500}
                            // style={{objectFit: 'fit', width: "100%", height: "20vw"}}
                            className={Style.nftCardTwo_box_img_img}
                        />
                    </div>

                    <div className={Style.nftCardTwo_box_info}>
                        <div className={Style.nftCardTwo_box_info_left}>
                            <LikeProfile />
                            <p>Clone #{i+1}</p>
                        </div>
                        <small>4{i+2}</small>
                    </div>

                    <div className={Style.nftCardTwo_box_price}>
                        <div className={Style.nftCardTwo_box_price_box}>
                            <small>Current Bid</small>
                            <p>1{i+5}.000 ETH </p>
                        </div>
                        <p className={Style.nftCardTwo_box_price_stock}>
                            <MdTimer /><span>{i+1} hours left</span>
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NFTCardTwo