import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { useState } from 'react'
import './Evenimente.css'

import Eveniment from '../components/Eveniment'
import ListaEvenimente from '../components/ListaEvenimente'

function Evenimente() {
    return (
        <>
            <div className="introducere" id="introducere-evenimente">
                <h1>Rezervă-ți acum biletul</h1>
                <button type="button" className="btn btn-primary" id="buton-vezi-evenimente" onClick={() => window.location.hash = "#ziua-luni"}>
                    Da-i tata <i className="bi bi-caret-down"></i>
                </button>
            </div>
            <div id="pagina-evenimente">
                <ListaEvenimente zi="luni"/>
                <hr />
                <ListaEvenimente zi="marti" />
                <hr />
                <ListaEvenimente zi="miercuri" />
                <hr />
                <ListaEvenimente zi="joi" />
                <hr />
                <ListaEvenimente zi="vineri" />
            </div>
        </>
    )
}

export default Evenimente 
