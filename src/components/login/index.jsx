import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import user from "../../assets/images/socialIcon/user.svg"
import lock from "../../assets/images/socialIcon/lock.svg"
import { Link } from 'react-router-dom';

const emailPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const Login = () => {

    const [login, setLogin] = useState(null)

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();



    const userLoginInfo = (data) => {
        setLogin(data)
        reset()

    }


    console.log(login)

    return (
        <section className="py-5">
            <div className="container">

                <div className="row">

                    <div className="col-12 col-lg-8 mx-auto">
                        <div className="bg-info p-3 rounded d-flex align-items-center mb-3">
                            <span className="">
                                <img style={{ width: "20px" }} src={user} alt="" />
                            </span>
                            <span className="ms-2">User Login</span>
                        </div>
                        <div className="bg-white p-3">
                            <Form onSubmit={handleSubmit(userLoginInfo)} className="">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="mb-3">Email address <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" className='py-2 mb-2 rounded-pill' {...register("email", { required: true, pattern: emailPatten })} />

                                    {errors.email && <Form.Text className="text-danger">
                                        {errors.email.type === 'required' && "Please email addrss"}
                                        {errors.email.type === 'pattern' && "Please corret email address"}

                                    </Form.Text>}

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="mb-3">Password <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="password" className="py-2 mb-2 rounded-pill" {...register("password", { required: true, minLength: 8 })} />

                                    {errors.password && <Form.Text className="text-danger">
                                        {errors.password.type === "required" && "Please Password"}
                                        {errors.password.type === "minLength" && "Please min 8 cereter Password"}
                                    </Form.Text>}


                                </Form.Group>

                                <Button className="mt-3 bg-info border-0" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <Form.Group className="mt-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me for StudioX" />
                            </Form.Group>
                          
                           <Link to="/forgetpassword" className="mt-1  text-dark text-decoration-none" >Forget password?</Link>
                           <br/>
                            <Link to="/register" className="mt-1  text-dark text-decoration-none" >Not a member yet? Register now.</Link>
                          
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Login
