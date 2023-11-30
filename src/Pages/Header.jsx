import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/gobmxlogo.svg'

const Header = () => {
  return (
    <div>
      <Navbar className="App-header">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h5>Trámites</h5>
            </Navbar.Text>
            <Navbar.Text>
              <h5>Gobierno</h5>
            </Navbar.Text>
            <Navbar.Text>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='fac'>
        <Container>
          <h2>FACTURA ELECTRÓNICA</h2>
        </Container>
      </div>

    </div>
  );
}

export default Header;
