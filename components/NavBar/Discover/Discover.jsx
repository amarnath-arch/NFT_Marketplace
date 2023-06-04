import React from 'react'

import Style from "./discover.module.css";
import Link from 'next/link';

const Discover = () => {
    const discover=[
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "Search"
        },
        {
            name: "Author Profile",
            link: "author"
        },
        {
            name: "NFT Details",
            link: "NFT Details"
        },
        {
            name: "Account Settings",
            link: "Account Settings"
        },
        {
            name: "Connect Wallet",
            link: "Connect Wallet"
        },
        {
            name: "Blog",
            link: "Blog"
        }
    ]


  return (
    <div>
        {
            discover.map((el,i)=>(
                <div key={i+1}  className={Style.discover}>
                    <Link href={{ pathname: `${el.link}` }} >{el.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Discover