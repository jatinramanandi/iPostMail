import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../service/iPostService';

function Protected(props) {
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('token');
        if (!login) {
            navigate('/login')
        }
    })
    return (
        <>
            <Component />
        </>
    )
}

function AdminProtected(props) {
    const userId = localStorage.getItem('userId');
    getUserDetails(userId).then((response) => {
        const secureUser = response.data.data.role;
        checkRole(secureUser)
    }).catch((error) => {
        console.log(error);
    })
    const { Component } = props
    const navigate = useNavigate();
    const checkRole = (secureUser) => {
        let login = localStorage.getItem('token');
        console.log(login, secureUser);
        if (!login || secureUser != "superAdmin") {
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