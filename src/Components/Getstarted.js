import React from 'react';

import{Link} from 'react-router-dom'


function Getstarted() {

    return (
        <div className = "getstart">
           
            <h1>The easiest way to create a professional resume.</h1>
            <ol type ="1">
                <li>Choose your favorite resume style.</li>
                <li>Insert pre-written examples.</li>
                <li>Download and print your new resume.</li>
            </ol>
            <Link to ='/templates'>
                <button>Let's Get it!!</button>
            </Link>
           
            
        </div>
          
      
    )
    
  }
 
 export default Getstarted