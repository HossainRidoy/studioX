import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./beard.module.scss"
import BeardCategory from "../../../api/manCategory"
import Card from "../../../components/cards/home-page-card"
import CardPopular from "../../../components/cards/home-page-popular-card"
import HomeTitleBar from '../../../components/home-title-bar'





const Beard = () => {

    const [beard, setBeard] = useState(BeardCategory.filter((category) => category.category === 'beard'))

    const [beardPopular, setBeardPopular] = useState(BeardCategory.filter((category) => category.category === 'beard'))
  


    return (
        <section className="py-5">
            <div className="container">
                <HomeTitleBar title="Beard" view="View All"   url= "/blogs/beard" />
                <div className="row">
                    <div className="col-12 col-lg-9 mb-4 mb-lg-0">
                        <Card item={beard[0]} />
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mb-lg-0">
                       <div className={`card ${ScssStyle.card}`}>
                       <h6 className="text-uppercase p-2">Popular Post</h6>
                       {beardPopular.map((popularItem,index)=>(
                        <CardPopular key={index} item={popularItem} />
                       ))}
                       
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beard

