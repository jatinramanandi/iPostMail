import React from 'react'
import emailIcon from '../../assets/images/EmailIcon.png'

function WelcomeMessage({ userFirstName }) {
    return (
        <>

            <div className="welcomeMessage">
                <div className="welcomeMessageContent text-center">
                    <img src={emailIcon} alt="" />
                    <h3 className="fw-bold pt-4 pb-2">Welcome to <span>iPost Mail</span>, {
                        userFirstName && (userFirstName.charAt(0).toUpperCase() + "" + userFirstName.slice(1).toLowerCase())
                    }</h3>
                    <p className="fw-bold">Thanks for using <span>iPost Mail.</span>
                        Please tell us about your experience and give us feedback.
                        Your feedback helps us create a better experience
                        for you and for all of our customers</p>
                </div>
            </div>

        </>
    )
}

export default WelcomeMessage