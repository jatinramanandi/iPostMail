import React from 'react';
import sideImg from '../../assets/images/sideContent.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate('/login')
    }
    return (
        <>
            <div className="container">
                <div className="row mainPage">
                    <div className="col-xs-12 col-md-6 mb-5">
                        <h1>iPost <span>Mail</span></h1>
                        <p>Now a post is just a mail away Now a post is just a mail away Now a post is just a mail away Now a post is just.</p>
                        <button type='button' className='btn buttons' onClick={loginPage}>Sign In</button>
                    </div>
                    <div className="col-xs-12 col-md-6 mb-5">
                        <img src={sideImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home