import React,{useState} from 'react'

import Style from "./followerTabCard.module.css";

import Image from 'next/image';
import images from "../../../img";
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

const FollowerTabCard = ({el,i}) => {
    const [following, setFollowing] = useState(false);


    const followMe = () => {
        if(!following){
            setFollowing(true);
        }else{
            setFollowing(false);
        }
    }


  return (
    <div className={Style.followerTabCard}>
        <div className={Style.followerTabCard_rank}>
            <p>
                #{i+1}<span>🥇</span>
            </p>
        </div>
        
        <div className={Style.followerTabCard_box}>
            <div className={Style.followerTabCard_box_img}>
                <Image
                    src={images.creatorbackground1}
                    width={280}
                    height={170}
                    alt='profile background'
                    className={Style.followerTabCard_box_img_img}
                />
            </div>

            <div className={Style.followerTabCard_box_profile}>
                <Image
                    src={images.user1}
                    width={50}
                    height={50}
                    alt='profile'
                    className={Style.followerTabCard_box_profile_img}
                />
            </div>


            <div className={Style.followerTabCard_box_info}>
                <div className={Style.followerTabCard_box_info_name}>
                    <h4>Mickey Arthur{""}<span><MdVerified /></span></h4>
                    <p>12.323 ETH</p>
                </div>
                
                <div className={Style.followerTabCard_box_info_following}>
                    {
                        following? (
                            <a onClick={() => followMe()}>Follow{""}<TiTick /></a>
                        ):(
                            <a onClick={() => followMe()}>Following</a>
                        )
                    }
                </div>
            </div>


        </div>

    </div>
  )
}

export default FollowerTabCard