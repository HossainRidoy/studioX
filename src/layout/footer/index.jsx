import React from 'react'
// import StyleScss from "./footer.module.scss"

import Email from "../../assets/images/socialIcon/email.svg"
import Facebook from "../../assets/images/socialIcon/facebook.svg"
import Instagram from "../../assets/images/socialIcon/instagram.svg"
import Youtube from "../../assets/images/socialIcon/youtube.svg"

import Logo from "../../assets/images/logo/logo_x.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='bg-dark text-white py-5'>
            <div className="container">
                <div className="text-center">
                    <p className="mb-3">Studio X is a Range of Grooming Essentials for Men, crafted by international styling experts to ensure that you look your best. Every single time.</p>

                    <a href="mailto:info@studioxstyle.com" className="mb-3 d-block text-white text-decoration-none">
                        <img style={{ height: "20px" }} className="img-fluid me-3" src={Email} alt="" />
                        <span>
                            info@studioxstyle.com
                        </span>
                    </a>
                    <div className="mb-3">
                        <a href="" target="_blank">
                            <img style={{ height: "20px" }} className="img-fluid mx-3" src={Facebook} alt="" />
                        </a>
                        <a href="" target="_blank">
                            <img style={{ height: "20px" }} className="img-fluid mx-3" src={Instagram} alt="" />
                        </a>
                        <a href="" target="_blank">
                            <img style={{ height: "20px" }} className="img-fluid mx-3" src={Youtube} alt="" />
                        </a>
                    </div>
                </div>

                <div className="row align-items-end">
                    <div className="col-12 text-center text-lg-start col-lg-1">
                        <Link to="/" className="d-block mt-3 mt-lg-0">
                            <img style={{ width: "100px" }} className="img-fluid" src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className=" col-lg-11 d-flex justify-content-center justify-content-lg-between  align-items-center flex-wrap text-center mt-3 mt-lg-0">
                        <div>
                            Marico Bangladesh. All Rights Reserved.
                        </div>
                        <div>
                            Developed By : Beatnik
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
