import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Eveniment.css'

function Eveniment(props) {
    return (
        <>
            <div className="eveniment">
                <img src={props.cover} alt="" />
                <div className="right">
                    <div className="details">
                        <div><i className="bi bi-geo-alt"></i> {props.loc}</div>
                        <div><i className="bi bi-clock"></i> {props.ora}</div>
                        <div><i className="bi bi-hourglass-bottom"></i>{props.durata}min</div>
                    </div>
                    <h1>{props.titlu}</h1>
                    <p>
                        {props.detalii}
                    </p>
                    <div className="buttons">
                        <Link to="https://www.youtube.com/watch?v=2-H7DVE8_PM">
                            <button type="button" className="btn btn-dark">Află mai multe</button>
                        </Link>
                        <Link to="book">
                        <button type="button" className="btn btn-primary">Rezervă</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eveniment
