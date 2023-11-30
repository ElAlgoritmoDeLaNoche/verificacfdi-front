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
              <a href="https://www.gob.mx/tramites">
                <h5>Trámites</h5>
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="https://www.gob.mx/gobierno">
                <h5>Gobierno</h5>
              </a>
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
      <div className="home">
        <Container>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-house-fill casa" viewBox="0 0 16 16" style={{ marginTop: '5px' }}>
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
          </svg>
          {" >"} Inicio
        </Container>
      </div>
    </div>
  );
}

export default Header;
