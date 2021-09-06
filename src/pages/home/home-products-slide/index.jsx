import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SlideProducts from "../../../api/homeProductsSlide"

const HomeProductsSlide = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
           
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <section className="bg-white py-5 my-5">
            <Slider {...settings}>
                {SlideProducts.map((item, index) => (
                    <div key={index} className="px-5">
                        <div className="row">
                            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                <h3 className="mb-3">{item.title}</h3>
                                <p className="font-size-16 mb-3">{item.subTitle}</p>
                                <p className="font-size-16"><strong className="text-uppercase">Net Weight</strong> <span className="">{item.weight}ml</span></p>
                                <p className="font-size-16 mb-2"><strong className="text-uppercase">Price <span className="text-primary">Bdt</span></strong > <span className="text-uppercase">{item.price}</span></p>
                                <strong className="font-size-16 text-uppercase">{item.buyForm}</strong>
                                <a className="" href={item.daraz} target="_blank">
                                    <img className='img-fluid  mt-3' src={item.button} alt="" />
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                <img className="img-fluid" src={item.picture} alt="" />
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>
        </section>
    )
}

export default HomeProductsSlide
