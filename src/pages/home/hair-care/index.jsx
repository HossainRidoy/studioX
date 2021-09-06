import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./hairCare.module.scss"
import HairCareCategory from "../../../api/manCategory"
import Card from "../../../components/cards/home-page-card"
import CardPopular from "../../../components/cards/home-page-popular-card"
import HomeTitleBar from '../../../components/home-title-bar'





const HairCare = () => {

    const [hairCare, sethairCare] = useState(HairCareCategory.filter((category) => category.category === 'hair'))

    const [hairCarePopular, sethairCarePopular] = useState(HairCareCategory.filter((category) => category.category === 'hair'))



    return (
        <section className="py-5">
            <div className="container">
                <HomeTitleBar title="Hair Care" view="View All" url="/blogs/hair" />
                <div className="row">
                    <div className="col-12 col-lg-9 mb-4 mb-lg-0">
                        <Card item={hairCare[0]} />
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mb-lg-0">
                       <div className={`card ${ScssStyle.card}`}>
                       <h6 className="text-uppercase p-2">Popular Post</h6>
                       {hairCarePopular.map((popularItem,index)=>(
                        <CardPopular key={index} item={popularItem} />
                       ))}
                       
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HairCare

