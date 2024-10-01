import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  const [dropdownOpen, setDropdownOpen] = useState({
    company: false,
    programs: false,
    resources: false,
  });

  const handleMouseEnter = (type) => setDropdownOpen((prev) => ({ ...prev, [type]: true }));
  const handleMouseLeave = (type) => setDropdownOpen((prev) => ({ ...prev, [type]: false }));

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      fixed="top" // This makes the navbar fixed at the top
      style={{ backgroundColor: '#000058', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }} // Optional shadow for better visibility
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="images/cloudilogo-removebg-preview.png" // Ensure this path is correct
            alt="Logo"
            style={{ height: '70px', width: '100px', backgroundColor: '#FFFFF0', borderRadius: '50%' }} // Adjust the logo styling as needed
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              title={<span style={{ color: 'white', fontSize: '18px' }}>Company Registration</span>}
              id="company-dropdown"
              show={dropdownOpen.company}
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={() => handleMouseLeave('company')}
            >
              <NavDropdown.Item href="#action/3.1" style={{ color: '#000000' }}>Private Limited Company</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: '#000000' }}>Limited Liability Partnership</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ color: '#000000' }}>One Person Company</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{ color: '#000000' }}>Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span style={{ color: 'white', fontSize: '18px' }}>Programs</span>}
              id="programs-dropdown"
              show={dropdownOpen.programs}
              onMouseEnter={() => handleMouseEnter('programs')}
              onMouseLeave={() => handleMouseLeave('programs')}
            >
              <NavDropdown.Item href="#action/3.1" style={{ color: '#000000' }}>Rize for YC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: '#000000' }}>Rize Pitch Perfect</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span style={{ color: 'white', fontSize: '18px' }}>Resources</span>}
              id="resources-dropdown"
              show={dropdownOpen.resources}
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={() => handleMouseLeave('resources')}
            >
              <NavDropdown.Item href="#action/3.1" style={{ color: '#000000' }}>Knowledge</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: '#000000' }}>Tools</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#blogs" style={{ color: '#FFFFFF' }}>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Button 
              variant="primary"  
              active 
              style={{ color: '#FFFFFF', fontSize: '19px' }} 
            >
              Register your business
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
