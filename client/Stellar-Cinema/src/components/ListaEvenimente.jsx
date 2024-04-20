import React, { useState } from "react"
import Eveniment from "./Eveniment"
import './ListaEvenimente.css'

class EvenimentCinema {
    constructor() {
        this.titlu = "breamking bad"
        this.detalii = "Lorem ipsum dolor sit amet"
        this.loc = "Sala 2203"
        this.ora = "19:00"
        this.durata = "120"
        this.zi = "luni"
        this.cover = "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
    }
}

const events = []

const dummyData = function () {
    if(events.length === 0)
        for(let i = 0; i < 5; i++)
            events.push(new EvenimentCinema())
}

function ListaEvenimente(props) {
    dummyData()

    const coloane = 2
    const nrRanduri = parseInt(events.length / coloane) + ((events.length % coloane != 0) ? 1 : 0)
    const randuri = []
    for(let i = 0; i < nrRanduri; i++) {
        randuri.push(events.map((item, j) => {
            if(item.zi !== props.zi)
                return <></>

            const rand = parseInt(j / coloane)
            if(rand != i)
                return <></>

            return (
                <Eveniment
                    cover={item.cover}
                    titlu={item.titlu}
                    detalii={item.detalii}
                    loc={item.loc}
                    ora={item.ora}
                    durata={item.durata}
                />
            )
        }))
    }
    
    const htmlEvenimente = randuri.map((item) => {
        return <>
            <div className="rand">
                {item}
            </div>
        </>
    })

    return (
        <>
            <div className="container">
                <div className="zi">
                    <h5>{props.zi}</h5>
                </div>
                <div className="evenimente">
                    {htmlEvenimente}
                </div>
            </div>
        </>
    )    
}

export default ListaEvenimente