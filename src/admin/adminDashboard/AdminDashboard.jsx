import React, { useState } from 'react'
import Footer from '../../layout/footer/Footer'
import DashboardHeader from '../adminPages/adminheader/DashboardHeader'
import DashboardSideBar from '../adminPages/dashboardsidebar/DashboardSideBar'
import UserTable from '../adminDashboard/userList/UserTable'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AddAdmin from '../adminPages/createAdmin/AddAdmin'
import UserDatas from '../adminPages/userData/UserDatas'

function AdminDashboard() {

    const navigate = useNavigate();
    const location = useLocation();
    const userListClicked = (_id) => {
        navigate(`/admin/userdata/${_id}`);
    }

    return (
        <>
            <DashboardHeader />
            <section className="container-fluid section">
                <div className="row demo">
                    <div className="col-2">
                        <div className="sideBar">
                            <DashboardSideBar />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="messages">
                            {location.pathname == "/admin/addadmin" ? <AddAdmin /> : location.pathname == "/admin/dashboard" ? <UserTable userListClicked={userListClicked} /> : <UserDatas />}
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default AdminDashboard