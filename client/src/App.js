import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import AllEmployee from './components/AllEmployee';
import AddEmployee from './components/AddEmployee';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menues from './components/Menues';
import UpdateEmployee from './components/UpdateEmployee';
import {BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>{

  const btnHandle = () =>{
    toast.success("This is first toast",{position:"top-center"});
  }

  return (
    <div>
      <Router>
      <ToastContainer/>
      <Header/>
       <Container>
         <Row>
           <Col md={4}>
            <Menues/>
           </Col>
           <Col md={8}>
            
            <Route path="/" component={Home} exact/>
            <Route path="/addEmployee" component={AddEmployee} exact/>
            <Route path="/viewEmployee" component={AllEmployee} exact/>

            
            <Route path="/updateEmployee/:id"  render={(props) => <UpdateEmployee  id={props.match.params.id}/>} exact/>
            
           </Col>
         </Row>
       </Container>
       </Router>
    </div>
  );
}

export default App;
