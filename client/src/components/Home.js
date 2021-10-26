
import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import {useEffect} from 'react';
const Home = () =>{
   useEffect(() =>{
      document.title = "Employee";
    },[]);

    return(
     <div className="text-center">
        <Jumbotron className="text-center">
        <h1 className="display-3">Employee Management Using MERN </h1>
        <p>Mern Project</p>
       </Jumbotron>
     </div>
    );
}

export default Home;