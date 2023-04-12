import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import inbox from '../../../assets/images/inbox.png'
function DashboardSideBar() {
    const location = useLocation();
    return (
        <ul className="pt-3">
            <Link to="/admin/dashboard" className="mb-3">
                <li className={location.pathname == "/admin/dashboard" ? "sidebarListActive" : "sidebarList"} >
                    <div>
                        <img src={inbox} alt="" className="me-2" />
                        DashBoard
                    </div>
                </li>
            </Link>
        </ul>
    )
}

export default DashboardSideBar