import React from 'react'
import Beard from './beard'
import Grooming from './grooming'
import HairCare from './hair-care'
import HomeProductsSlide from './home-products-slide'
import HomeSlide from './home-slide'
import LatestVideos from './latest-videos'
import SkinCare from './skin-care'

const Home = () => {
    return (
        <>
            <HomeSlide />
            <SkinCare/>
            <HairCare/>
            <Grooming/>
            <Beard/>
            <HomeProductsSlide/>
            <LatestVideos/>

        </>
    )
}

export default Home
