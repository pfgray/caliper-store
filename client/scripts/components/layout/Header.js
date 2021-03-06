import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row, Grid, ButtonGroup, Button, FormControl, FormGroup } from 'react-bootstrap';

const Header = ({user, children}) => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>Sift</Navbar.Brand>
      <Navbar.Text>{user.username}</Navbar.Text>
    </Navbar.Header>
    <Nav pullRight>
      {user.role === 'admin' ? (
        <LinkContainer to="/admin">
          <NavItem>Admin</NavItem>
        </LinkContainer>
      ): null}
      <LinkContainer to="/overview">
        <NavItem>Buckets</NavItem>
      </LinkContainer>
      <NavItem href='/logout'>
        Logout <i className="fa fa-external-link" ></i>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
