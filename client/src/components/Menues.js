import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const Menues = () =>{

    return(
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" to="/" tag="a" action>
                    Home
                </Link>
                <Link className="list-group-item list-group-item-action" to="/addEmployee" tag="a" action>
                    Add Employee
                </Link>

                <Link className="list-group-item list-group-item-action" to="/viewEmployee" tag="a" action>
                    View Employee
                </Link>
                
            </ListGroup>
        </div>
    );
}

export default Menues;