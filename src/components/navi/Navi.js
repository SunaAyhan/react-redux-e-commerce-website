import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

    NavbarText
  } from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends Component {
    render() {
        return (
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Market</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
           
          
           <CartSummary></CartSummary>
          </Nav>
       
        </Collapse>
      </Navbar>
    </div>
        )
    }
}
