import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./skinCare.module.scss"
import SkinCareCategory from "../../../api/manCategory"
import Card from "../../../components/cards/home-page-card"
import CardPopular from "../../../components/cards/home-page-popular-card"
import HomeTitleBar from '../../../components/home-title-bar'





const SkinCare = () => {

    const [skinCare, setSkinCare] = useState(SkinCareCategory.filter((category) => category.subCategory === 'face'))

    const [skinCarePopular, setSkinCarePopular] = useState(SkinCareCategory.filter((category) => category.subCategory === 'face'))



    return (
        <section className="py-5">
            <div className="container">
                <HomeTitleBar title="Skin Care" view="View All" url="blogs/skin-care/face" />
                <div className="row">
                    <div className="col-12 col-lg-9 mb-4 mb-lg-0">
                        <Card item={skinCare[0]} />
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mb-lg-0">
                       <div className={`card ${ScssStyle.card}`}>
                       <h6 className="text-uppercase p-2">Popular Post</h6>
                       {skinCarePopular.map((popularItem,index)=>(
                        <CardPopular key={index} item={popularItem} />
                       ))}
                       
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkinCare

