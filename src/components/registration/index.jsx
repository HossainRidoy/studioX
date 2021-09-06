import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import user from "../../assets/images/socialIcon/user.svg"
import lock from "../../assets/images/socialIcon/lock.svg"
import { Link } from 'react-router-dom';

const emailPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const Registration = () => {

    const [login, setLogin] = useState(null)

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();



    const userLoginInfo = (data) => {
        // setLogin(data)
        alert("done")
        reset()

    }




    return (
        <section className="py-5">
            <div className="container">


                <div className="bg-info p-3 rounded d-flex align-items-center mb-3">
                    <span className="">
                        <img style={{ width: "20px" }} src={user} alt="" />
                        {/* <img style={{width:"17px"}} src={lock} alt="" /> */}
                    </span>
                    <span className="ms-2">Registration</span>
                </div>
                <div className=" p-3 bg-white">


                    <Form onSubmit={handleSubmit(userLoginInfo)} className="">


                        <div className="row">

                            <div className="col-12 col-sm-6 mb-3">
                                <Form.Group controlId="Username">
                                    <Form.Label className="">Use Name</Form.Label>
                                    <Form.Control type="text" className="py-1  border-0 border-bottom bg-transparent rounded-0" {...register("userName", { required: true, minLength: 3 })} />

                                    {errors.userName && <Form.Text className="text-danger">
                                        {errors.userName.type === 'required' && "Please User Name"}
                                        {errors.userName.type === 'minLength' && "Please min 3"}

                                    </Form.Text>}

                                </Form.Group>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <Form.Group controlId="User Email">
                                    <Form.Label className="">User Email</Form.Label>
                                    <Form.Control type="text" className="py-1 border-0 border-bottom bg-transparent rounded-0" {...register("userEmail", { required: true, pattern: emailPatten })} />

                                    {errors.userEmail && <Form.Text className="text-danger">
                                        {errors.userEmail.type === 'required' && "Please User Name"}
                                        {errors.userEmail.type === 'pattern' && 'courret email address'}

                                    </Form.Text>}

                                </Form.Group>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <Form.Group controlId="Password">
                                    <Form.Label className="">Password</Form.Label>
                                    <Form.Control type="password" className="py-1  border-0 border-bottom bg-transparent rounded-0" {...register("password", { required: true, minLength: 8 })} />

                                    {errors.password && <Form.Text className="text-danger">
                                        {errors.password.type === 'required' && "Please password"}
                                        {errors.password.type === 'minLength' && "Please min 8"}

                                    </Form.Text>}

                                </Form.Group>
                            </div>

                            <div className="col-12 col-sm-6 mb-3">
                                <Form.Group controlId="ConfirmPassword ">
                                    <Form.Label className="">Confirm Password</Form.Label>
                                    <Form.Control type="password" className="py-1  border-0 border-bottom bg-transparent rounded-0" {...register("confirmPassword", { required: true, minLength: 8 })} />

                                    {errors.confirmPassword && <Form.Text className="text-danger">
                                        {errors.confirmPassword.type === 'required' && "Please password"}
                                        {errors.confirmPassword.type === 'minLength' && "Please min 8"}

                                    </Form.Text>}

                                </Form.Group>
                            </div>
                        </div>
                        <div className="text-end">
                            <Button className="mt-3 bg-info border-0" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>

                </div>

            </div>
        </section>
    )
}

export default Registration
