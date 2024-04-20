import React from "react"

function SpinRow(props) {
    return <>
        <div className="spin-row">
            <div className="first">{props.first}</div>
            <div className="second">{props.second}</div>
            <div className="third">{props.third}</div>
        </div>
    </>
}

export default SpinRow