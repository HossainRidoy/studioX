import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./grooming.module.scss"
import HomeTitleBar from '../../../components/home-title-bar'

import Image_1 from "../../../assets/images/groming/1.jpg"
import Image_2 from "../../../assets/images/groming/2.jpg"
import Image_3 from "../../../assets/images/groming/3.jpg"

const groomingItems = [
    {
        id: 1,
        picture: Image_1,
        title: "Trends",
        url: "/blogs/grooming/trends"
    },
    {
        id: 2,
        picture: Image_2,
        title: "Experts",
        url: ""
    },
    {
        id: 3,
        picture: Image_3,
        title: "Occation",
        url: "/blogs/grooming/occasions"
    },
]



const Grooming = () => {




    return (
        <section className="py-5">
            <div className="container">
                <HomeTitleBar title="Grooming" view="View All" url= "/blogs/grooming/trends" />
            </div>
           <div className="container-fluid">
           <div className="row">
                {groomingItems.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 p-0">
                        <Link to={item.url} className={`img-fluid d-block ${ScssStyle.imageOverly}`}>
                            <img className='img-fluid' src={item.picture} alt="" />
                            <h5 className={`img-fluid ${ScssStyle.title}`}>{item.title}</h5>
                        </Link>
                    </div>
                ))}

            </div>
           </div>
        </section>
    )
}

export default Grooming

