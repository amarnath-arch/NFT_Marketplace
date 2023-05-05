import React from 'react'

import Style from "./helpcenter.module.css";
import Link from 'next/link';

const HelpCenter = () => {
    const helpCenter=[
        {
            name: "About",
            link: "About"
        },
        {
            name: "ContactUs",
            link: "ContactUs"
        },
        {
            name: "SignUp",
            link: "SignUp"
        },
        {
            name: "SignIn",
            link: "SignIn"
        },
        {
            name: "Subscription",
            link: "Subscription"
        }
    ]


  return (
    <div className={Style.box}>
        {
            helpCenter.map((el,i)=>(
                <div key={i+1}  className={Style.helpCenter}>
                    <Link href={{ pathname: `${el.link}` }} >{el.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default HelpCenter;