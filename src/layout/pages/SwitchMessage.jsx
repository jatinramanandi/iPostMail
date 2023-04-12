import React from 'react'
import selectMessage from '../../assets/images/DNF.png'

function SwitchMessage() {
    return (
        <>
            <div className="switchMessage">
                <img src={selectMessage} alt="" />
                <h6>you've not selected any message</h6>
            </div>
        </>
    )
}

export default SwitchMessage