import React from 'react'
import Style from "./notification.module.css";

import Image from 'next/image';
import images from "../../../img";

const Notification = () => {
  return (
    <div className={Style.notification}>
        <p>Notification</p>
        <div className={Style.notification_box}>
            <div className={Style.notification_box_img}>
                <Image src={images.user1} height={50} width={50} alt='profile image' className={Style.notification_box_img}/>
            </div>

            <div className={Style.notification_box_info}>
                <h4>Shoaib Akhtar</h4>
                <p>Measure action your user....</p>
                <small>3 minutes ago</small>
            </div>
            <span className={Style.notification_box_new}></span>
        </div>

    </div>
  )
}

export default Notification