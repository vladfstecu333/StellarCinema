import { useState } from 'react'

function Scaun({ value, onSeatClick, number }) {
    if(value == -1)
        return (
            <button className={"scaun" + " btn " + "scaun-inactiv"}>
                {number}
            </button>
        )

    const tip = (value == 0) ? 'btn-danger'
                             : (value == 1) ? 'btn-secondary' : 'btn-success' 

    return (
        <button className={"scaun" + " btn " + tip} onClick={onSeatClick}>
            {number}
        </button>
    )
}

export default Scaun