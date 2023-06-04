import React, { useState } from 'react'

import Style from "./authorProfileCard.module.css";
import Image from 'next/image';
import images from "../../img";
import { MdCloudUpload, MdOutlineReportProblem, MdOutlineSyncProblem, MdVerified } from 'react-icons/md';
import {FiCopy} from 'react-icons/fi';
import { TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram } from 'react-icons/ti';
import { Button } from '@/components/componentindex';
import { BsThreeDots } from 'react-icons/bs';

const AuthorProfileCard = () => {
    const [share,setShare] = useState(false);
    const [report, setReport] = useState(false);

    const copyAddress = ()=>{
        const copyText = document.getElementById("myInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const openShare = () =>{
        if(!share){
            setShare(true);
            setReport(false);

        }else{
            setShare(false);
        }
    }


    const openReport = () =>{
        if(!report){
            setShare(false);
            setReport(true);

        }else{
            setReport(false);
        }
    }



  return (
    <div className={Style.authorProfileCard}>
        <div className={Style.authorProfileCard_box}>
            <div className={Style.authorProfileCard_box_img}>
                <Image
                    src={images.nft_image_1}
                    height={220}
                    width={220}
                    alt='nftt image'
                    // style={{width: "100%"}}
                    className={Style.authorProfileCard_box_img_img}
                />
            </div>
            
            <div className={Style.authorProfileCard_box_info}>
                <h2>
                    Ryan Harris{""}{" "}
                    <span><MdVerified /></span>{" "}
                </h2>
                <div className={Style.authorProfileCard_box_info_address}>
                    <input type='text' value="0x2343240932480...432" id='myInput' />
                    <FiCopy onClick={() => copyAddress()} className={Style.authorProfileCard_box_info_address_icon} />
                </div>

                <p>
                    Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
                    Contributing to @ether_cards, an NFT Monetization Platform.
                </p>

                <div className={Style.AuthorProfileCard_box_info_social}>
                    <a href="#">
                    <TiSocialFacebook />
                    </a>
                    <a href="#">
                    <TiSocialInstagram />
                    </a>
                    <a href="#">
                    <TiSocialLinkedin />
                    </a>
                    <a href="#">
                    <TiSocialYoutube />
                    </a>
                </div>

            </div>

            
            <div className={Style.authorProfileCard_box_share}>
                <Button btnName={"Follow"} handleClick={() => {}} />
                <MdCloudUpload onClick={() => openShare()} className={Style.authorProfileCard_box_share_icon} />

                {
                    share && (
                        <div className={Style.authorProfileCard_box_share_upload}>
                            <p>
                                <span>
                                    <TiSocialFacebook />
                                </span>{" "}
                                {""}
                                Facebook
                            </p>

                            <p>
                                <span>
                                    <TiSocialInstagram />
                                </span>{" "}
                                {""}
                                Instagram
                            </p>

                            <p>
                                <span>
                                    <TiSocialLinkedin />
                                </span>{" "}
                                {""}
                                LinkedIn
                            </p>

                            <p>
                                <span>
                                    <TiSocialYoutube />
                                </span>{" "}
                                {""}
                                Youtube
                            </p>
                        </div>
                    )
                }

                <BsThreeDots onClick={() => openReport()} className={Style.authorProfileCard_box_share_icon} />
                {
                    report && (
                        <p className={Style.authorProfileCard_box_share_report}>
                            <span>
                                <MdOutlineReportProblem />
                            </span>{" "}
                            {""}
                            Report Abuse
                        </p>
                    )
                }

            </div>

        </div>
    </div>
  )
}

export default AuthorProfileCard