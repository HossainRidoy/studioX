import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import user from "../../assets/images/socialIcon/user.svg"
import lock from "../../assets/images/socialIcon/lock.svg"
import { Link } from 'react-router-dom';

const emailPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const ForgetPassword = () => {

    const [login, setLogin] = useState(null)

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();



    const userLoginInfo = (data) => {
        setLogin(data)
        reset()

    }


    console.log(login)

    return (
        <section className='my-5'>
            <div className="container">

                <div className="row">

                    <div className="col-12 col-lg-8 mx-auto">
                        <div className="bg-info p-3 rounded d-flex align-items-center mb-3">
                            <span className="">
                                <img style={{ width: "20px" }} src={user} alt="" />
                            </span>
                            <span className="ms-2">Forget Password</span>
                        </div>
                        <div className="bg-white p-3">
                            <Form onSubmit={handleSubmit(userLoginInfo)} className="">
                                <p className="mb-2">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="mb-2">Username or email</Form.Label>
                                    <Form.Control type="text" className="py-2 mb-2 border-0 border-bottom " {...register("email", { required: true, pattern: emailPatten })} />

                                    {errors.email && <Form.Text className="text-danger">
                                        {errors.email.type === 'required' && "Please email addrss"}
                                        {errors.email.type === 'pattern' && "Please corret email address"}

                                    </Form.Text>}

                                </Form.Group>

                               

                                <div className="text-end">
                                <Button className="mt-3 bg-info border-0"  type="submit">
                                    Reset Password
                                </Button>
                                </div>
                            </Form>
                           
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ForgetPassword
