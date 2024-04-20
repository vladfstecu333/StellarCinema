import { useState } from 'react'
import './Scena.css'

import Scaun from './Scaun'

function getScene(id) {
    const scena = [
        -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1,
         1,  1,  1,  0, -1, 1, 0, 1, -1,  0,  0,  1,  1,
         0,  0,  0,  0, -1, 0, 1, 1, -1,  1,  1,  1,  0,
         1,  1,  1,  1,  1, 1, 1, 1, -1,  0,  1,  1,  1
    ]

    return scena
}

function Scena(props) {
    const [seats, setSeats] = useState(getScene(props.id))
    const [selectedCount, setSelectedCount] = useState(0)

    function handleClick(i) {   
        if(seats[i] > 0) {
            if(seats[i] == 1 && selectedCount >= props.maxSelections)
                return

            if(seats[i] == 1)
                setSelectedCount(selectedCount + 1)
            else
                setSelectedCount(selectedCount - 1)

            setSeats(seats => seats.map((itm, j) => {
                if(j !== i)
                    return itm
                else
                    return (itm == 1) ? 2 : 1
            }))

            if(props.onSeatSelected)
                props.onSeatSelected(i, selectedCount)
        }
    }

    const randuri = []
    for(let i = 0; i < props.rows; i++) {
        randuri.push(seats.map((item, j) => {
            const rand = parseInt(j / props.cols)
            if(rand != i)
                return <></>
            else
                return (<Scaun key={j} number={j} value={item} onSeatClick={() => handleClick(j)} />)
        }))
    }

    const textSelectate =
        (selectedCount == 0) ? <>Nu ai selectat niciun loc</>
                             : <>Ai selectat {selectedCount}/{props.maxSelections} locuri</>
    

    return (<>
        <h5>{textSelectate}</h5>
        <div className="scena">
            <div className="focus">Scena</div>
            <div className="scaune">
                {
                    randuri.map((rand, i) => {
                        return (
                            <div className="rand">
                                {rand}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>)
}

export default Scena
