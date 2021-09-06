import React from 'react'
import HomeTitleBar from '../../../components/home-title-bar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import VideosItems from "../../../api/latestVideos"

const LatestVideos = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoPlay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <section className="py-5 my-5">
            <div className="container">

                <HomeTitleBar title="Latest Videos" view="View All" url="#"/>

                <Slider {...settings}>
                    {VideosItems.map((item, index) => {
                        let videoId = item.video.split('?')[1].split('&')[0].split('=')[1];
                        return (
                            <div key={index} className="card border-0 p-3" >

                                <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className="card-body">
                                    <div className=" cont-size-10">
                                        <span className="">{item.date}</span>
                                        <span className="">{item.howto}</span>
                                    </div>
                                    <p className="font-size-18 font-weight-700">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>
        </section>
    )
}

export default LatestVideos
