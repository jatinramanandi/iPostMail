import React from 'react'
import logo from '../../../assets/images/Logo.png'
import userimg from '../../../assets/images/user.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { adminLogout, userLogout } from '../../../service/iPostService';

function DashboardHeader() {
    const _id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();


    const addAdmin = () => {
        navigate('/admin/addadmin');
    }

    const logoutPage = () => {
        adminLogout(_id).then((response) => {
            toast.success(response.data.message);
            localStorage.removeItem('userName')
            localStorage.removeItem('userId')
            localStorage.removeItem('token')
            navigate('/adminlogin');
        }).catch((error) => {
            console.log(error);
            toast.error(error.response.data.message);
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className=" container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <ul className="nav justify-content-end">
                        <Dropdown className='dropDownMenu'>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src={userimg} alt="" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => addAdmin()}>
                                    Add Admin
                                    <i className="fa fa-user-plus  ms-3"></i>
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => logoutPage()} >
                                    Logout
                                    <i className="fa-solid fa-right-from-bracket ms-5"></i>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Outlet />
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default DashboardHeader