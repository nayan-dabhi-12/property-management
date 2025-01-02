import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Import the CSS file

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Navbar for Desktop and Mobile */}
      <Navbar
        expand="lg"
        variant="light"
        fixed="top"
        className="navbar-custom"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="navbar-brand">
            <img src="https://greenleafservices.net/wp-content/uploads/sites/683/2016/08/new-logo.png" alt="Logo" />
          </Navbar.Brand>

          {/* Hamburger Menu */}
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="navbar-toggler"
          />
          <Navbar.Collapse id="navbar-nav" in={expanded}>
            {/* Menu Items Centered */}
            <Nav className="ms-auto navbar-nav-center">
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              <NavDropdown
                title="Properties"
                id="navbar-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action1" className="nav-dropdown-item">
                  Item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2" className="nav-dropdown-item">
                  Item 2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Maintenance"
                id="navbar-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item
                  href="#action1"
                  className="nav-dropdown-item-2"
                >
                  Item 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action2"
                  className="nav-dropdown-item-2"
                >
                  Item 2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Payments"
                id="navbar-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item
                  href="#action1"
                  className="nav-dropdown-item-3"
                >
                  Item 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action2"
                  className="nav-dropdown-item-3"
                >
                  Item 2
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Button className="cta-button cta-login">Login</Button>
              <Button className="cta-button cta-signup">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
