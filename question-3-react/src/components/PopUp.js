import React from 'react'

const PopUp = ({ error }) => {
    return (
        <div className="pop-up-wrapper">
            <div className="pop-up">
                <p className={`${error ? "text-danger" : "text-success"}`}>{error ? "Can't add the employee, pls try again!" : "Employee Added successfully!"}</p>
            </div>
        </div>
    )
}

export default PopUp