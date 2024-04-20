import React from 'react'

import Scena from '../components/Scena'
import './Rezervare.css'

function Rezervare() {
    return (<>
        <div id="rezervare">
            <h1>Alege-ti locul</h1>
            <Scena cols={13} rows={4} maxSelections={3}/>
        </div>
    </>)
}

export default Rezervare