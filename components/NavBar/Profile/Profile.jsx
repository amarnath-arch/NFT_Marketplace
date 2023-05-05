import React from 'react'

import Style from "./profile.module.css";
import Link from 'next/link';
import Image from 'next/image';
import images from "../../../img";

import {FaUserAlt,FaRegImage,FaUserEdit} from "react-icons/fa";
import {MdHelpCenter} from "react-icons/md";
import {TbDownload,TbDownloadOff} from "react-icons/tb";


const Profile = () => {
  return (
    <div className={Style.profile}>
        <div className={Style.profile_account}>
            <Image src={images.user1} alt="userprofile" width={50} height={50} className={Style.profile_account_img} />
            <div className={Style.profile_account_info}>
                <p>Shoaib Bhai</p>
                <small> 83494573297....</small>

            </div>
        </div>
        
        <div className={Style.profile_menu}>
            <div className={Style.profile_menu_one}>
                <div className={Style.profile_menu_one_item}>
                    <FaUserAlt />
                    <p>
                        <Link href={{pathname: 'myprofile'}} >My Profile </Link>
                    </p>
                </div>

                <div className={Style.profile_menu_one_item}>
                    <FaRegImage />
                    <p>
                        <Link href={{pathname: 'myprofile'}} >My Items </Link>
                    </p>
                </div>

                <div className={Style.profile_menu_one_item}>
                    <FaUserEdit />
                    <p>
                        <Link href={{pathname: 'myprofile'}} >Edit Profile </Link>
                    </p>
                </div>
            </div>


            <div className={Style.profile_menu_two}>
                <div className={Style.profile_menu_one_item}>
                    <MdHelpCenter />
                    <p>
                        <Link href={{pathname: '/help'}} >Help </Link>
                    </p>
                </div>

                <div className={Style.profile_menu_one_item}>
                    <TbDownload />
                    <p>
                        <Link href={{pathname: 'disconnect'}} >Disconnect </Link>
                    </p>
                </div>

            
            </div>
                
        </div>

    </div>
  )
}

export default Profile