import SpinRow from "../components/SpinRow"
import { useState } from "react"

import './BookOfRa.css'

const getNewRow = function() {
    const fruits = [ '🐊', '🥸', '🦅', '🎰', '❄️', '🥬' ]

    const row = []
    for(let i = 0; i < 3; i++) {
        row.push(fruits[parseInt(Math.random() * (fruits.length - 1))])
    }

    return row
}

function BookOfRa() {
    const [ rows, setRows ] = useState([ getNewRow(), getNewRow(), getNewRow() ])
    const [ spinning, setSpinning ] = useState(false)

    const startSpin = () => {
        setRows([ getNewRow(), getNewRow(), getNewRow() ])
        setSpinning(true)
        setTimeout(() => setSpinning(false), 300)
    }

    const elems = rows.map((item, i) => {
        return <SpinRow 
            first={item[0]}
            second={item[1]}
            third={item[2]}
        />
    })

    return <>
        <div id="pacanea">
            <div id="spin-box" style={{
                animation: (spinning) ? "bookOfRa 0.3s" : "none"
            }}>
                {elems}
            </div>
            <button type="button" className="btn btn-primary" onClick={() => startSpin()}>
                Spin
            </button>
        </div>
    </>

}

export default BookOfRa