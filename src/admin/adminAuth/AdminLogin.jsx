import React, { useState } from 'react'
import logo from '../../assets/images/Logo.png'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import { adminLogin } from '../../service/iPostService';

function AdminLogin() {
    const [loader, setLoader] = useState(false);

    const cssStyle = {
        color: "red",
        fontSize: "12px",
        textAlign: "left",
        marginLeft: "10%"
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values, onSubmitProps) => {
            setLoader(true);
            
            adminLogin(values)
                .then((response) => {
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("userId", response.data.data.adminId);
                    localStorage.setItem("userEmail", response.data.data.adminEmail);
                    onSubmitProps.resetForm();
                    inbox();
                })
                .catch((error) => {
                    setLoader(false);
                    toast.error(error.response.data.message);
                });
        },
        validate: (values) => {
            let error = {}

            if (!values.email) {
                error.email = "Email is Required"
            } else if (!/^[a-zA-Z0-9]+@(technostacks\.com)$/i.test(values.email)) {
                error.email = "Enter a valid Email e.g. hello@technostacks.com"
            }

            if (!values.password) {
                error.password = "Password is Required"
            }
            return error;
        }
    })
    const navigate = useNavigate();
    const inbox = () => {
        navigate('/admin/dashboard')
    }
    return (
        <>
            <div className="row text-center container-fluid">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5">
                    <img src={logo} alt="" />
                    <h3 className="fw-bolder mt-1">Login to Account</h3>
                    <p className="fw-bold regPara mb-3">We’de love to have you on board. Join over 500+ customers around the globe and enhace productivity.</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="register">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-5">
                                        <input type="email" placeholder='Enter Your email' className='formInput' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div style={cssStyle}  >{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-5">
                                        <input type="password" placeholder='Password' className='formInput' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div style={cssStyle} >{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <button type='Submit' className='btn mb-3'> {loader ? <i className="fas fa-spinner fa-pulse"></i> : "Sign In"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLogin