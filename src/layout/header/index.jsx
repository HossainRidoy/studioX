import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

import HeaderMenu from "../../api/headerMenu"
import StyleScss from "./header.module.scss"
import Logo from "../../assets/images/logo/logo_x.png"

import TogglerButton from "../../assets/images/socialIcon/bars.svg"

import Left_shap from "../../assets/images/logo/dot-shape-left.svg"
import Right_shap from "../../assets/images/logo/dot-shape-right.svg"

import Facebook from "../../assets/images/socialIcon/facebook.svg"
import Instagram from "../../assets/images/socialIcon/instagram.svg"

import Search from "../../assets/images/socialIcon/search.svg"

import English from "../../assets/images/english-bangla/en.png"
import Bangla from "../../assets/images/english-bangla/bn.png"
import ManCategorys from '../../api/manCategory'

const Header = () => {

    const [bars, setBars] = useState(false)
    const useRefInp = useRef()


    const togglerButton = () => {
        setBars(!bars)

    }
    const [searchSt, setSearchSt] = useState()


    const searchTitle = (e) => {
        let inputt = e.target.value
        let filterItem = ManCategorys.filter((item) => item.title.toLocaleLowerCase().indexOf(inputt.toLocaleLowerCase()) > -1)
        setSearchSt(filterItem)
    }
    const [trueFalse, settrueFalse] = useState(false)

    const searchButton = () => {
        settrueFalse(!trueFalse)
    }
    const close = () => {
        settrueFalse(!trueFalse)
        useRefInp.current.value = ""
        setSearchSt()
    }

        console.log(searchSt)

    return (
        <section id="header" className={`bg-dark position-relative ${StyleScss.fixedTop}`}>


            <img className={`h-100 ${StyleScss.leftShap}`} src={Left_shap} alt="" />
            <img className={`h-100 ${StyleScss.rightShap}`} src={Right_shap} alt="" />
            <div className="container">
                <nav className={`d-flex align-items-center justify-content-between font-size-18 text-uppercase py-3 ${StyleScss.navbar}`}>
                    <Link to="/" style={{ zIndex: "999" }} className="d-block">
                        <img style={{ width: "150px" }} className={`img-fluid ${StyleScss.logo}`} src={Logo} alt="" />
                    </Link>
                    <div>
                        <div style={{ zIndex: "9999" }} className="text-white text-end d-flex justify-content-end align-items-center">
                            <div className="d-none d-md-block">
                                <Link to="#"><img style={{ height: "18px" }} className="img-fluid m-2" src={Facebook} alt="" /></Link>
                                <Link to="#"><img style={{ height: "18px" }} className="img-fluid m-2" src={Instagram} alt="" /></Link>
                            </div>

                            <div onClick={searchButton} style={{ cursor: 'pointer' }} className="d-flex align-items-center me-2">
                                <img style={{ height: "18px" }} className="img-fluid m-2" src={Search} alt="" />
                                <span className="font-size-17 text-white text-capitalize">Search</span>
                            </div>

                            {/* search box start */}
                            <div className={`d-none ${trueFalse && StyleScss.SearchBox}`}>
                                <button onClick={close} className={`text-white btn border m-3`}>X</button>

                                <input ref={useRefInp} onChange={searchTitle} className="form-control my-5 py-2" type="text" placeholder="Search..." />

                                <div className="overflow-auto text-start">
                                    {searchSt && searchSt.length > 0 && searchSt.map((item, index) => (

                                        <Link key={index} onClick={close} to={`/blogs/${item.category}/${item.subCategory}/${item.title}/${item.id}`} className="text-sm-start ms-2 ms-lg-5 text-decoration-none py-4 d-block">
                                            <span className="text-white text-decoration-none">{item.title}</span>
                                        </Link>
                                    ))}

                                </div>
                            </div>
                            {/* search box end */}


                            <div className="social me-2">
                                <Link to="#"><img style={{ height: "15px" }} className="img-fluid m-2" src={English} alt="" /></Link>
                                <span className="">|</span>
                                <Link to="#"><img style={{ height: "15px" }} className="img-fluid m-2" src={Bangla} alt="" /></Link>
                            </div>
                            <Link to="/login" className="text-white text-decoration-none font-size-13">
                                Login
                            </Link>

                        </div>
                        {/* Toggler Button */}
                        <div onClick={togglerButton} className={`d-none text-end ${StyleScss.togglerBars}`}>
                            <img style={{ height: "25px", cursor: "pointer" }} className="img-fluid" src={TogglerButton} alt="" />
                        </div>

                        <ul className={`navbar nav flex-column flex-lg-row ${StyleScss.categorys}  ${bars && StyleScss.togglerButton}`}>
                            {HeaderMenu && HeaderMenu.length > 0 && HeaderMenu.map((nav, index) => (
                                <li onClick={nav.subCategory ? null : togglerButton} className={`nav-item dropdown py-1 ${StyleScss.dropdown}`} key={index}>
                                    <NavLink activeClassName={StyleScss.active} exact={true} className="nav-link text-white" to={nav.url}>{nav.category}
                                        {nav.arrow && <img style={{ width: "13px", marginLeft: "5px" }} className="img-fluid " src={nav.arrow} alt="" />}
                                    </NavLink>

                                    {nav.subCategory && <ul className={`dropdown-menu ${StyleScss.dropdownMenu}`}>
                                        {nav.subCategory && nav.subCategory.length > 0 && nav.subCategory.map((nav, index) => (
                                            <li onClick={togglerButton} className="" key={index}>
                                                <Link to={nav.url} activeClassName={StyleScss.active} exact={true} className="dropdown-item text-dark ps-2 py-1" >{nav.category}</Link>
                                            </li>
                                        ))}
                                    </ul>}
                                </li>
                            ))}

                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header
