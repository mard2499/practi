import React, { useState } from "react";
import routes from './config/routes';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Label,
  Container,
  Row,
} from 'reactstrap';
import Home from "./page/Home"
import Create from "./page/Create"
import firebase from "./lib/firebase";

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  console.log(firebase.database)

  return (
    <div className='App'>
      <Router>
        <Navbar color='dark' dark expand="md">
          <NavbarBrand href="/">Ecomard</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
            {
              routes.routes.map(routes => {
                  const {label, path} = routes;
                  return(
                    <NavItem>
                    <Link to={path}>
                      <NavLink>{label}</NavLink>
                    </Link>
                  </NavItem>
                  )
              })
            
          }

            </Nav>

          </Collapse>
        </Navbar>


       
        
        <Container>
          <Row>
            <Switch>
            <Route path="/" exact={true} component={Home} />     
            <Route path="/Create" component={Create} />
            
  
            </Switch>
          </Row>
        </Container>
      </Router>


    </div>

  );
}

export default App;
