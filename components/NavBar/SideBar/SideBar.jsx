import React,{useState} from 'react'
import Style from "./sidebar.module.css";

import Link from 'next/link';
import images from '../../../img';


import Image from 'next/image';
import {GrClose} from 'react-icons/gr';
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';

import { Button } from '@/components/componentindex';

const SideBar = ({setOpenSideMenu}) => {
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    const discover=[
        {
            name: "Collection",
            link: "Collection"
        },
        {
            name: "Search",
            link: "Search"
        },
        {
            name: "Author Profile",
            link: "Author Profile"
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



    const openDiscoverMenu = () =>{
        if(!openDiscover){
            setOpenDiscover(true);
        }else{
            setOpenDiscover(false);
        }
    }

    const openHelpMenu = ()=>{
        if(!openHelp){
            setOpenHelp(true);
        }else{
            setOpenHelp(false);
        }
    }

    const closeSideBar = ()=>{
        setOpenSideMenu(false);
    }



  return (
    <div className={Style.sideBar}>
        <GrClose className={Style.sideBar_closeBtn} onClick={()=> closeSideBar()} />
        <div className={Style.sideBar_box}>
            <Image src={images.logo} alt='logo' width={150} height={150} />
            <p>Discover the most oustanding articles on all topics of NFT of your own stories and share them</p>
            <div className={Style.sideBar_social}>
                <a href='#'>
                    <TiSocialFacebook />
                </a>
                <a href='#'>
                    <TiSocialLinkedin />
                </a>
                <a href='#'>
                    <TiSocialTwitter />
                </a>
                <a href='#'>
                    <TiSocialYoutube />
                </a>
                <a href='#'>
                    <TiSocialInstagram />
                </a>

            </div>
        </div>

        <div className={Style.sideBar_menu}>
            <div>
                <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
                    <p>Discover</p>
                    <TiArrowSortedDown />
                </div>
                {
                    openDiscover && (
                        <div className={Style.sideBar_discover}>
                            {
                                discover.map((el,i)=>(
                                    <p key={i+1}>
                                        <Link href={{pathname: el.link }} >{el.name}</Link>
                                    </p>
                                ))
                            }
                        </div>
                    )}
            </div>

            <div>
                <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
                    <p>Help Center</p>
                    <TiArrowSortedDown />
                </div>
                {
                    openHelp && (
                        <div className={Style.sideBar_discover}>
                            {
                                helpCenter.map((el,i)=>(
                                    <p key={i+1}>
                                        <Link href={{pathname: el.link }} >{el.name}</Link>
                                    </p>
                                ))
                            }
                        </div>
                    )}
            </div>
        </div>
        

        <div className={Style.sideBar_button}>
            <Button btnName="Create"  handleClick={()=> {}} />
            <Button btnName="Connect Wallet" handleClick={()=> {}} />
        </div>


    </div>
  )
}

export default SideBar