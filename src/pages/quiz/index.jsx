import React from 'react'
import { Link } from 'react-router-dom'
import Quizs from "../../api/quiz"
const Quiz = () => {
    return (
        <section className="py-5">

            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" >Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Quis</li>
                    </ol>
                </nav>
                <div className="row">
                    {Quizs.map((item, index) => (
                        <Link to={item.url} key={index} className="col-4">
                            <img className="img-fluid" src={item.picture} alt="" />
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Quiz
