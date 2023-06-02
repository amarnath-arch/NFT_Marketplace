import React from 'react'

import Style from "../styles/collection.module.css";
import images from "../img";

import { CollectionProfile,Banner,NFTCardTwo } from '@/collectionPage/collectionPageindex';
import Filter from "../components/Filter/Filter";
import { Slider,Brand } from '@/components/componentindex';



const collection = () => {
    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3
    ];

  return (
    <div className={Style.collection}>
        <Banner bannerImage={images.creatorbackground1} />
        <CollectionProfile />
        <Filter />
        <NFTCardTwo nftData={collectionArray} />
        <Slider />
        <Brand />
    </div>
  )
}

export default collection