import React,{useState, useEffect} from 'react'
import Style from "./navbar.module.css";

import Image from 'next/image';

import {BsSearch} from "react-icons/bs";
import {MdNotifications} from "react-icons/md";
import {CgMenuRight} from 'react-icons/cg';
import {CgMenuLeft} from 'react-icons/cg';

import {Discover,HelpCenter,Notification,Profile,SideBar} from "./index";
import { Button } from '../componentindex';
import images from "../../img";

import Link from 'next/link';




const Navbar = () => {
    const [discover, setDiscover ] = useState(false);
    const [profile, setProfile ] = useState(false);
    const [notification, setNotification ] = useState(false);
    const [help, setHelp ] = useState(false);
    const [openSideMenu, setOpenSideMenu ] = useState(false);


    const openMenu = (e) => {
        const btnText = e.target.innerText;
    
        if(btnText == "Discover"){
            if(discover){
                setDiscover(false);
                setProfile(false);
                setHelp(false);
                setNotification(false);
            }else{
                setDiscover(true);
                setProfile(false);
                setHelp(false);
                setNotification(false);
            }
            
            // setOpenSideMenu(false);
        }else if(btnText == "Help Center"){
            if(help){
                setDiscover(false);
                setProfile(false);
                setHelp(false);
                setNotification(false);
            }else{
                setDiscover(false);
                setProfile(false);
                setHelp(true);
                setNotification(false);
            }
            
        }else{
            setDiscover(false);
            setProfile(false);
            setHelp(false);
            setNotification(false);
        }
    }
    
    const openNotification = (e)=>{
        if(!notification){
            setDiscover(false);
            setProfile(false);
            setHelp(false);
            setNotification(true);
        }else{
            setNotification(false);
        }
    }

    const openProfile = () =>{
        if(!profile){
            setDiscover(false);
            setProfile(true);
            setHelp(false);
            setNotification(false);
        }else{
            setProfile(false);
        }
    }

    const openSidebar = () =>{
        if(! openSideMenu){
            setOpenSideMenu(true);
        }else{
            setOpenSideMenu(false);
        }
    }



    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    {/* Logo Section */}

                    <Link href={{ pathname: '/' }}>
                        <div className={Style.logo}>
                            <Image  src={images.logo} height={100} width={100} alt="NFT Marketplace Logo" />
                        </div>
                    </Link>

                    

                    {/* Search Section */}
                    <div className={Style.navbar_container_left_input}>
                        <div className={Style.navbar_container_left_input_box}>
                            <input placeholder='Search NFT' type='text'  />
                            <BsSearch onClick={()=>{}} className={Style.search_icon} />
                        </div>

                    </div>


                </div>


                {/* End of Left Section */}

                <div className={Style.navbar_container_right}>

                    {/* Discover Menu */}
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e)=>{openMenu(e)}}>Discover</p>
                        {discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )}
                    </div>

                    {/* Help Center Menu */}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={(e)=>{openMenu(e)}}>Help Center</p>
                        {
                        help && (
                            <div className={Style.navbar_container_right_help_box}>
                                <HelpCenter />
                            </div>
                        )
                        }

                    </div>


                    {/* Notification section   */}
                    <div className={Style.navbar_container_right_notification}>
                        <MdNotifications className={Style.notify} onClick={openNotification} />
                        {notification && <Notification /> }
                    </div>


                    {/* Create Button  */}
                    <div className={Style.navbar_container_right_button}>
                        <Button btnName="Create" handleClick={()=>{}}/>
                    </div>


                    {/* User Profile  */}
                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image src={images.user1} height={40} width={40} onClick={ () => openProfile()} 
                            className={Style.navbar_container_right_profile_img} />
                            {profile && <Profile /> }
                        </div>

                    </div>


                    {/* Menu Button  */}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight className={Style.menuIcon} onClick={()=> openSidebar()} />
                    </div>

                </div>

            </div>

            {/* Sidebar Component  */}
            {
                openSideMenu && (
                    <div className={Style.sideBar}>
                        <SideBar setOpenSideMenu={setOpenSideMenu} />
                    </div>
                )
            }

        </div>
    )
}

export default Navbar