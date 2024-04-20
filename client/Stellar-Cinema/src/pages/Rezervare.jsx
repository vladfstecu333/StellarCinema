import { useState } from 'react'
import { Link } from "react-router-dom";

import Scena from '../components/Scena'
import Bilet from '../components/Bilet'
import DiscountRoulette from '../components/ruletawow'

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
            <div id="rezervare" className="introducere">
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
                {
                    (selectedSeats != 0) ?
                    <>
                    <Link to="/succes">
                        <button type="button" className="btn btn-success">Checkout</button>
                    </Link>
                        <DiscountRoulette />
                    </> : <></>
                }
            </div>
        </div>
    </>)
}

export default Rezervare