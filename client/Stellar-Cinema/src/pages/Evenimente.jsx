import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { useState } from 'react'
import './Evenimente.css'

import Eveniment from '../components/Eveniment'

function Evenimente() {
    return (
        <>
            <div className="container text-center">
                
                <div className="row justify-content-center">
                    <div className="col">
                        <Eveniment 
                            cover="https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" 
                            loc="Pula" 
                            ora="9:00" 
                            durata="60"
                            titlu="Breaking Bad" 
                            detalii="You wanna cook crystal meth"
                        />
                    </div>

                    <div className="col">
                        <Eveniment 
                            cover="https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" 
                            loc="Pula" 
                            ora="9:00" 
                            durata="60"
                            titlu="Breaking Bad" 
                            detalii="You wanna cook crystal meth"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evenimente 
