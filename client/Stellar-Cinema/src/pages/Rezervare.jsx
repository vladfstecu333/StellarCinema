import { useState } from 'react'

import Scena from '../components/Scena'
import Bilet from '../components/Bilet'

import './Rezervare.css'

function Rezervare() {
    const [ selectedSeats, setSelectedSeats ] = useState([])

    const toggleSeat = function(number, newCount) {
        const idx = selectedSeats.indexOf(number)
        if(idx == -1) {
            const newSeats = [...selectedSeats]
            newSeats.push(number)
            setSelectedSeats(newSeats)
        }
        else {
            const newSeats = [...selectedSeats].filter((item) => item != number)
            setSelectedSeats(newSeats)
        }
    }

    const bilete = selectedSeats.map((item, i) => {
        return (<Bilet 
            numar={item} 
            pret={100}
        />)
    })

    return (<>
        <div id="continut">
            <div id="rezervare">
                <h1>Alege-ti locul</h1>
                <Scena 
                    cols={13} 
                    rows={4} 
                    maxSelections={3} 
                    onSeatSelected={(i, newCount) => toggleSeat(i, newCount)}
                />
            </div>
            <div id="cos">
                <h1>Coș cumpărături</h1>
                {bilete}
                <button type="button" className="btn btn-success" onClick={() => {
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }}>Checkout</button>
            </div>
        </div>
    </>)
}

export default Rezervare