import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { useState } from 'react'
import './Evenimente.css'

import Eveniment from '../components/Eveniment'
import ListaEvenimente from '../components/ListaEvenimente'

function Evenimente() {
    return (
        <>
            <ListaEvenimente zi="luni"/>
            <hr />
            <ListaEvenimente zi="marti" />
            <hr />
            <ListaEvenimente zi="miercuri" />
            <hr />
            <ListaEvenimente zi="joi" />
            <hr />
            <ListaEvenimente zi="vineri" />
        </>
    )
}

export default Evenimente 
