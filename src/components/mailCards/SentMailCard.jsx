import React from 'react';
import moment from 'moment';

function SentMailCard({ _id, to, subject, createdAt, index, cardClick, currentID }) {
    return (
        <>
            {to &&
                <div className={`card-container ${currentID == _id ? 'cardActive' : ''} d-flex row m-0`}>
                    <div className="cardClicked" key={index} onClick={cardClick} id={_id}>
                        <div className="card pb-3">
                            <div className="cardContent">
                                <div className="cardImg">
                                    <p>{to.firstName.charAt(0).toUpperCase() + "" + to.lastName.charAt(0).toUpperCase()}</p>
                                </div>
                                <div className="cardData read">
                                    <div className='d-flex justify-content-between'>
                                        <h6>{to.firstName.charAt(0).toUpperCase() + "" + to.firstName.slice(1).toLowerCase() + " " + to.lastName.charAt(0).toUpperCase() + "" + to.lastName.slice(1).toLowerCase()}</h6>
                                        <p className='mt-1'>{moment(createdAt).format('h:mm a')}</p>
                                    </div>

                                    <div className="para">
                                        <span>{subject}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SentMailCard