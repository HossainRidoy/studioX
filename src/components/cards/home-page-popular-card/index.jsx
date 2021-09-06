import React from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./homePagePopularCard.module.scss"

function HomePageCard({ item }) {
    return (
        <section>
           
            <div className={` ${ScssStyle.card}`}>
                <div className={` ${ScssStyle.ImageCard}`}>
                    <img className={` ${ScssStyle.Image}`} src={item.picture} alt="" />
                </div>
                <div className="card-body">
                    <div className="font-size-10 mb-2">
                    <span className="me-3">{item.date}</span>
                        <span className="me-3"> 0 {item.comment}</span>
                    </div>
                    <p className="text-uppercase mb-3 font-weight-700">{item.title}</p>
                </div>
            </div>
        </section>
    )
}

export default HomePageCard
