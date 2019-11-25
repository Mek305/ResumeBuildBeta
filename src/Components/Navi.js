 import React from 'react'
 

import{Link} from 'react-router-dom'

function Navi(){
    return(
        <nav>
            <h2>ResumeBuilder!! Beta Version tho.</h2>
            <div className ='navi-links'>
                <ul>
                    <Link to = '/'>
                        <li>Home</li>
                    </Link>
                    
                    <Link to = '/getstarted'>
                    <li> Get Started!</li>
                    </Link>
                </ul>
            </div>
        </nav>

    )
}

export default Navi;