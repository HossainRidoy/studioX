import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import HomeSlideApi from "../../../api/homeSlide"

const HomeSlide = () => {
    var settings = {
        // dots: true,
        infinite: true,
        arrows: false,
        autoPlay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };

    return (
        <section>
            <Slider {...settings}>
                {HomeSlideApi.map((item, index) => (
                    <div key={index}>
                        <img className="img-fluid" src={item.picture} alt="" />
                    </div>
                ))}

            </Slider>
        </section>
    )
}

export default HomeSlide
