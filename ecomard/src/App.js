import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import routes from './config/routes';

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
} from 'reactstrap';


function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='app'>
      <Router>
        <Navbar color='dark' dark expand="md">
          <NavbarBrand href="/">Ecomard</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>

              <NavItem>
                <Link to="/">
                  <NavLink>Temas</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/">
                  <NavLink>Crear</NavLink>
                </Link>
              </NavItem>

            </Nav>

          </Collapse>
        </Navbar>
      </Router>




    </div>

  );
}

export default App;
