import React from 'react';

import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import GetStarted from './Components/Getstarted.js';
import Navi from './Components/Navi.js';
import Templates from './Components/Template.js';



function App() {

   return (
     <Router>
       <div className ="App">
     <Navi />
       <Switch>
         <Route path ='/' exact component ={Home} />
         <Route path ='/getstarted' component = {GetStarted} />
         <Route path ='/templates' component = {Templates} />
       </Switch>
       
     </div>
     </Router>
   )
   
 }

 const Home = () =>(
   <div className ="head">
     <h1>Welcome to ResumeBuider Beta!!!</h1>
​
     <Link to="/getstarted">
       <button>Build Your Resume Now!!!</button>
     </Link>
   <hr></hr>
   <h1>Just click to insert custom pre-written bullets</h1>
     <p>Save time with thousands of pre-written “smart bullets” that you can click to plug-in to your resume.</p>
     <Link to="/getstarted">
       <button>Build Your Resume Now!!!</button>
     </Link>
  
   </div>
   
  
     

 )

export default App;
