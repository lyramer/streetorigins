import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">streetorigin.com</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {/* <NavLink href="/login/">Login</NavLink> */}
              <NavLink href="#" onClick={this.props.toggleLoginModal}>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={this.props.toggleAnalytics}>Analytics</Button>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={this.props.toggleAboutModal}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={this.props.toggleContactModal}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
