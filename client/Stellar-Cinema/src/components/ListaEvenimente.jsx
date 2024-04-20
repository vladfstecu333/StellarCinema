import React, { useState } from "react"
import Eveniment from "./Eveniment"
import './ListaEvenimente.css'

class EvenimentCinema {
    constructor(zi) {
        this.titlu = "breamking bad"
        this.detalii = " A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future."
        this.loc = "Sala 2203"
        this.ora = "19:00"
        this.durata = "120"
        this.zi = zi
        this.cover = "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
    }
}

const zile = [ 'luni', 'marti', 'miercuri', 'joi', 'vineri' ]

function ListaEvenimente(props) {
    const events = []
    
    const dummyData = function (zi) {
        if(events.length === 0)
            for(let i = 0; i < 4; i++)
                events.push(new EvenimentCinema(zi))
    }

    dummyData(props.zi)

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

    const butonScrollJos = (zile.indexOf(props.zi) < (zile.length - 1))
                                ? <><i className="bi bi-caret-down" onClick={() => window.location.hash = `#ziua-${zile[zile.indexOf(props.zi) + 1]}`}></i></>
                                : <></>

    const butonScrollSus = (zile.indexOf(props.zi) > 0)
                                ? <><i className="bi bi-caret-up" onClick={() => window.location.hash = `#ziua-${zile[zile.indexOf(props.zi) - 1]}`}></i></>
                                : <></>

    return (
        <>
            <div className="container" id={"ziua-" + props.zi}>
                <div className="zi">
                    <h3>{props.zi}</h3> 
                    {butonScrollJos}
                    {butonScrollSus}
                </div>
                <div className="evenimente">
                    {htmlEvenimente}
                </div>
            </div>
        </>
    )    
}

export default ListaEvenimente