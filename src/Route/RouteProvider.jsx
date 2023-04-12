import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/user/Login";
import Home from "../layout/pages/Home"
import Inbox from "../layout/pages/Inbox";
import { AdminProtected, Protected } from "../authentication/Protected";
import Register from '../components/user/Register';
import AdminLogin from '../admin/adminAuth/AdminLogin';
import AdminDashboard from '../admin/adminDashboard/AdminDashboard';
function RouteProvider() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/adminlogin' element={<AdminLogin />}></Route>
                    <Route path='/admin/' element={<AdminProtected Component={AdminDashboard} />}>
                        <Route path='dashboard'></Route>
                        <Route path='addadmin'></Route>
                        <Route path='userdata/:id'></Route>
                    </Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/" element={<Protected Component={Inbox} />}>
                        <Route path="inboxMails"></Route>
                        <Route path="sentMails"></Route>
                        <Route path="trashMails"></Route>
                        <Route path="compose"></Route>
                        <Route path="profile"></Route>
                        <Route path="resetPassword"></Route>
                    </Route>
                    <Route path='/*'></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteProvider