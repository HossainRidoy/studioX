import React from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./homePageCard.module.scss"

function HomePageCard({ item }) {
    return (
        <section className="bg-white">

            <Link to={item.subCategory ? `/blogs/${item.category}/${item.subCategory}/${item.title}/${item.id}`:`/blogs/${item.category}/${item.title}/${item.id}`} className={`text-dark text-decoration-none ${ScssStyle.card}`}>
                <div className={` ${ScssStyle.ImageCard}`}>
                    <img className={` ${ScssStyle.Image}`} src={item.picture} alt="" />
                </div>
                <div className="card-body px-4">
                    <div className="font-size-10 mb-3">
                        <span className="me-3">{item.date}</span>
                        <span className="me-3"> 0 {item.comment}</span>
                        <span className="me-3">10 {item.like}</span>
                    </div>
                    <h3 className="text-uppercase mb-3">{item.title}</h3>
                    <p className="mb-3">{item.subTitle}</p>
                    <div className="">
                        <button className="btn btn-outline-dark font-size-12">Read More</button>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default HomePageCard
