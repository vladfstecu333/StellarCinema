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
    const events = [
        {
            titlu: "Spărgând Rău",
            detalii: " A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
            loc: "Sala 2203",
            ora: "19:00",
            durata: "120",
            zi: "luni",
            cover: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
        },
        {
            titlu: "Bestiile",
            detalii: " A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
            loc: "cinema city",
            ora: "20:00",
            durata: "60",
            zi: "luni",
            cover: "https://zilesinopti.ro/wp-content/uploads/2023/02/Bestiile_afis.jpg.webp"
        },
        {
            titlu: "Mica Sirena",
            detalii: " A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
            loc: "la mine acasa",
            ora: "22:00",
            durata: "60",
            zi: "miercuri",
            cover: "https://i0.1616.ro/media/601/3161/38690/21120414/1/2402-little-mermaid-poster-comunicate-de-presa.jpg?width=730"
        },
        {
            titlu: "Shutter Island",
            detalii: "Shutter Island este un film thriller psihologic din 2010, regizat de Martin Scorsese, cu Leonardo DiCaprio rolul principal. Filmul se bazează pe romanul omonim din 2003, Shutter Island, scris de Dennis Lehane. Producția filmului a început în martie 2008.",
            loc: "la mine acasa",
            ora: "22:00",
            durata: "60",
            zi: "miercuri",
            cover: "https://static.cinemagia.ro/img/resize/db/movie/02/33/53/shutter-island-846360l-600x0-w-0df2faae.jpg"
        },
        {
            titlu: "Better Call Saul",
            detalii: "Better Call Saul este un serial de televiziune dramatic și polițist american, creat de Vince Gilligan și Peter Gould. Este un spin-off prequel al serialului Breaking Bad.",
            loc: "la mine acasa",
            ora: "22:00",
            durata: "60",
            zi: "vineri",
            cover: "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
        },
        {
            titlu: "Clubul de Lupta",
            detalii: "Fight Club este un film american din 1999, ecranizare a romanului omonim de Chuck Palahniuk, este un film regizat de David Fincher a fost votat printre primele 10 filme ale anilor 90 și a primit numeroase nominalizări coloana sonoră pe care le-a pierdut in favoarea filmului Matrix.",
            loc: "la mine acasa",
            ora: "02:00",
            durata: "60",
            zi: "marti",
            cover: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
            titlu: "Sarmane Creaturi",
            detalii: " A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
            loc: "la mine acasa",
            ora: "02:00",
            durata: "60",
            zi: "joi",
            cover: "https://verandamall.ro/wp-content/uploads/2024/01/filme-bune2.jpg"
        },
    ]

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