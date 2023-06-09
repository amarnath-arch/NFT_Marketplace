import React,{useState,useEffect,useCallback} from 'react'

import Image from 'next/image';

import Style from "./bignftslider.module.css";
import images from "../../img";
import { Button } from '../componentindex';
import { MdTimer, MdVerified } from 'react-icons/md';
import {AiFillFire, AiFillHeart} from 'react-icons/ai';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb';



const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
          title: "Hello NFT",
          id: 1,
          name: "Daulat Hussain",
          collection: "GYm",
          price: "00664 ETH",
          like: 243,
          image: images.user1,
          nftImage: images.nft_image_1,
          time: {
            days: 21,
            hours: 40,
            minutes: 81,
            seconds: 15,
          },
        },
        {
          title: "Buddy NFT",
          id: 2,
          name: "Luke",
          collection: "Home",
          price: "0000004 ETH",
          like: 243,
          image: images.user2,
          nftImage: images.nft_image_2,
          time: {
            days: 77,
            hours: 11,
            minutes: 21,
            seconds: 45,
          },
        },
        {
          title: "Gym NFT",
          id: 3,
          name: "Raayan Hussain",
          collection: "GYm",
          price: "0000064 ETH",
          like: 243,
          image: images.user3,
          nftImage: images.nft_image_3,
          time: {
            days: 37,
            hours: 20,
            minutes: 11,
            seconds: 55,
          },
        },
        {
          title: "Home NFT",
          id: 4,
          name: "Raayan Hussain",
          collection: "GYm",
          price: "4664 ETH",
          like: 243,
          image: images.user4,
          nftImage: images.nft_image_1,
          time: {
            days: 87,
            hours: 29,
            minutes: 10,
            seconds: 15,
          },
        },
      ];



      const inc = useCallback(()=>{
        setIdNumber((idNumber+1)%(sliderData.length))
        // if(idNumber+1 < sliderData.length){
        //     setIdNumber(idNumber +1);
        // }
      },[idNumber,sliderData.length]);

      const dec= useCallback(()=>{
        setIdNumber((idNumber-1 + sliderData.length)%(sliderData.length))
        // if(idNumber > 0){
        //     setIdNumber(idNumber - 1);
        // }
      },[idNumber]);


  return (
    <div className={Style.bignftslider}>
        <div className={Style.bignftslider_box}>
            <div className={Style.bignftslider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bignftslider_box_left_creator}>
                    <div className={Style.bignftslider_box_left_creator_profile}>
                        <Image
                            className={Style.bignftslider_box_left_creator_profile_img}
                            alt="profile image"
                            src={sliderData[idNumber].image}
                            width={50}
                            height={50}
                        />
                        <div className={Style.bignftslider_box_left_creator_profile_info}>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name} <span><MdVerified /></span> </h4>
                        </div>
                    </div>
                    <div className={Style.bignftslider_box_left_creator_collection}>
                        <AiFillFire 
                            className={Style.bignftslider_box_left_creator_collection_icon}
                        />

                        <div className={Style.bignftslider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>

                        
                    </div>
                </div>

                
                <div className={Style.bignftslider_box_left_bidding}>
                    <div className={Style.bignftslider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price} <span>$221,21</span></p>
                    </div>    

                    <p className={Style.bignftslider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bignftslider_box_left_bidding_box_icon} />
                        <span>Auction ending in..</span>
                    </p>
                    
                    <div className={Style.bignftslider_box_left_bidding_box_timer}>
                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.days}</p>
                            <span>Days</span>
                        </div>

                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span>Hours</span>
                        </div>

                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minutes}</p>
                            <span>mins</span>
                        </div>

                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span>secs</span>
                        </div>
                    </div>

                    <div className={Style.bignftslider_box_left_button}>
                        <Button btnName="Place" handleClick={()=>{}} />
                        <Button btnName="View" handleClick={()=>{}} />
                    </div>
                </div>
                
                <div className={Style.bignftslider_box_left_sliderbtn}>
                    <TbArrowBigLeftLine className={Style.bignftslider_box_left_sliderbtn_icon} 
                        onClick={()=>dec()}
                    />

                    <TbArrowBigRightLine className={Style.bignftslider_box_left_sliderbtn_icon} 
                        onClick={()=>inc()}
                    />
                    
                </div>



            </div>


            {/* Right Part  */}


            <div className={Style.bignftslider_box_right}>
                <div className={Style.bignftslider_box_right_box}>
                    <Image
                        src={sliderData[idNumber].nftImage}
                        alt='nftImage'
                        className={Style.bignftslider_box_right_box_img}
                        style={{width: '100%', height: '94vh'}}
                    />
                    <div className={Style.bignftslider_box_right_box_like}>
                        <AiFillHeart />
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default BigNFTSlider