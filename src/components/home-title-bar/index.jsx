import React from 'react'
import { Link } from 'react-router-dom'

const HomeTitleBar =(props)=> {
    return (
        <div className="">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h1 className="text-uppercase ">{props.title}</h1>
                <Link to={props.url} className="text-dark font-size-20">{props.view}</Link>
            </div>
        </div>
    )
}

export default HomeTitleBar
