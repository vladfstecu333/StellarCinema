import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Eveniment.css'

function Eveniment(props) {
    return (
        <>
            <div className="eveniment">
                <div className="left">
                    <img src={props.cover} alt="" />
                </div>
                <div className="right">
                    <div className="details">
                        <div><i class="bi bi-geo-alt"></i> {props.loc}</div>
                        <div><i class="bi bi-clock"></i> {props.ora}</div>
                        <div><i class="bi bi-hourglass-bottom"></i>{props.durata}min</div>
                    </div>
                    <h1>{props.titlu}</h1>
                    <p>
                     A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.
                    </p>
                    <div className="buttons">
                        <button type="button" className="btn btn-dark">Află mai multe</button>
                        <button type="button" className="btn btn-primary">Rezervă</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eveniment
