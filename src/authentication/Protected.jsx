import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../service/iPostService';

function Protected(props) {
    const { Component } = props;
    const userId = localStorage.getItem('userId');
    getUserDetails(userId, "user").then((response) => {
        const secureUser = response.data.data.role;
        checkRole(secureUser)
    }).catch((error) => {
        console.log(error);
        if (error.response.data.message = "Please Signin Once Again") {
            navigate('/login')
        }
    })
    const navigate = useNavigate();
    let login = localStorage.getItem('token');
    useEffect(() => {
        if (!login) {
            navigate('/login')
        }
    })
    const checkRole = (secureUser) => {
        console.log(login, secureUser);
        if (!login || secureUser != "user") {
            navigate('/login')
        }
    }
    return (
        <>
            <Component />
        </>
    )
}

function AdminProtected(props) {
    const { Component } = props;
    const adminId = localStorage.getItem('userId');
    getUserDetails(adminId, "admin").then((response) => {
        const secureAdmin = response.data.data.role;
        checkRole(secureAdmin)
    }).catch((error) => {
        console.log(error);
    })
    const navigate = useNavigate();
    const checkRole = (secureAdmin) => {
        let login = localStorage.getItem('token');
        console.log(login, secureAdmin);
        if (!login || secureAdmin != "superAdmin") {
            navigate('/adminlogin')
        }
    }
    return (
        <>
            <Component />
        </>
    )
}

export { Protected, AdminProtected }