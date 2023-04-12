import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { userDatas } from '../../../service/iPostService';

function UserDatas() {
    const [usersList, setUsersList] = useState([]);
    const { id } = useParams();
    const getUserListData = () => {
        userDatas(id).then((response) => {

            setUsersList(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getUserListData();
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row p-3">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Sent</th>
                                <th scope="col">Recieved</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Read</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider" id='usersDataList'>
                            {
                                usersList.length != 0 && usersList.map(({ from, to, subject, counter, _id }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{from}</td>
                                        <td>{to}</td>
                                        <td>{subject}</td>
                                        <td>{counter}</td>
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

export default UserDatas