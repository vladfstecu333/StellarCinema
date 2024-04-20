import React from "react"

import './Bilet.css'

function Bilet(props) {
    return (<>
        <div className="bilet">
            <div>
                <h3>Rezervare loc <strong>#{props.numar}</strong></h3>
                <h4><strong>Pret:</strong> {props.pret} ron</h4>
            </div>
            <button type="button" className="btn btn-danger">
                <i className="bi bi-trash"></i>
            </button>
        </div>
    </>)
}

export default Bilet