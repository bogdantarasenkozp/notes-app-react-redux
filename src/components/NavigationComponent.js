import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

// import logo from '../logo.svg';

class Navigation extends Component{
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <Nav className="" navbar>
          	<NavItem>
              <Link to="/">
          		  <img src='./logo.svg' width="35" height="35" />
              </Link>
          	</NavItem>
            <NavItem>
              <NavLink>
              	<Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              	<Link to="/users" activeClassName="active">Users</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

