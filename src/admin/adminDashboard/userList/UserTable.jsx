import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getTotalMailCount, getUserCount, getUserList } from '../../../service/iPostService';

function UserTable({ userListClicked }) {

    const [usersList, setUsersList] = useState([]);
    const [userCounts, setUserCounts] = useState([]);
    const [totalMailsCount, setTotalMailsCount] = useState([]);

    const navigate = useNavigate();
    const getUserListData = () => {
        getUserList().then((response) => {

            setUsersList(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const getUserCounts = () => {
        getUserCount().then((response) => {
            setUserCounts(response.data.data.totalUsers)
        }).catch((error) => {
            console.log(error);
        })
    }

    const getTotalMailsCounts = () => {
        getTotalMailCount().then((response) => {
            setTotalMailsCount(response.data.data.totalMails);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getUserListData();
        getUserCounts();
        getTotalMailsCounts();
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-6"><p className='totalCount'>Total Users <span className="badge">{userCounts}</span></p></div>
                    <div className="col-6"><p className='totalCount'>Total Mails <span className="badge">{totalMailsCount}</span></p></div>
                    <hr />
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total Sent</th>
                                <th scope="col">Total Recieved</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider" id='usersDataList'>
                            {
                                usersList.length != 0 && usersList.map(({ fullName, email, totalSent, totalReceived, _id }, index) => (

                                    <tr key={index} onClick={() => userListClicked(_id)}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{fullName}</td>
                                        <td>{email}</td>
                                        <td>{totalSent}</td>
                                        <td>{totalReceived}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserTable