import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/index.css';

import Footer from './Footer';

import hacienda from '../images/hacienda.jpg'
import captcha from '../images/GeneraCaptcha.jpeg'

const Default = () => {

  const [folioFiscal, setFolioFiscal] = useState('')

  const [searchResult, setSearchResult] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const tableRef = useRef();
  const inputRef = useRef(null);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construir la URL con los parámetros
      const url = `https://verificacfdi-server.vercel.app/api/books/${folioFiscal}`;

      // Realizar consulta para buscar el libro
      const response = await axios.get(url, {
        params: {
          captchaToken,
        },
      });
      setSearchResult(response.data);
      console.log('Resultado de la consulta:', response.data);
    } catch (error) {
      console.error('Error al interactuar con el servidor:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const formatFolioFiscal = (value) => {
    // Eliminar caracteres no permitidos (dejar solo letras y números)
    value = value.replace(/[^a-zA-Z0-9]/g, '');

    // Añadir guiones según la estructura deseada
    let formattedValue = '';
    let currentIndex = 0;

    for (let i = 0; i < value.length; i++) {
      if (currentIndex === 8 || currentIndex === 13 || currentIndex === 18 || currentIndex === 23) {
        formattedValue += '-';
        currentIndex++;
      }

      formattedValue += value[i];
      currentIndex++;
    }

    // Agregar guiones restantes si es necesario
    while (currentIndex <= 35) {
      if (currentIndex === 8 || currentIndex === 13 || currentIndex === 18 || currentIndex === 23) {
        formattedValue += '-';
        currentIndex++;
      } else {
        formattedValue += '_';
        currentIndex++;
      }
    }

    return formattedValue;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatFolioFiscal(inputValue);
    setFolioFiscal(formattedValue);
  };

  const verificarNumero = () => {
    // Obtener el valor del input
    var valorIngresado = document.getElementById("numeroInput").value;

    // Comparar con el valor deseado
    if (valorIngresado === "19580") {
      alert("¡El número ingresado es igual a 19580!");
    } else {
      alert("El número ingresado no es igual a 19580. Por favor, inténtelo de nuevo.");
    }
  }

  return (
    <Container style={{ height: '100vh' }}>
      <div className="logohacienda"><img src={hacienda} alt="" /></div>
      <h3 className='search'>Verificación de comprobantes fiscales digitales por internet</h3>
      <hr />
      <label className='certificate'>A través de esta opción, usted podrá verificar si el comprobante fue certificado por el SAT</label>
      <Form onSubmit={handleSearchSubmit} className='form'>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Folio fiscal*:
                <Form.Control
                  type="text"
                  value={folioFiscal}
                  onChange={handleInputChange}
                  ref={inputRef}
                  placeholder="________-____-____-____-____________"
                  required
                />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                RFC emisor*:
                <Form.Control type="text" required />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                RFC receptor*:
                <Form.Control type="text" required />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg='4'>
            <img src={captcha} alt="" />
          </Col>
          <Col xs lg='4'>
            <Form.Label>
              Proporcione los dígitos de la imagen*:
              <Form.Control type="text" required onChange={verificarNumero} />
            </Form.Label>
          </Col>
          <Col xs lg='4'>
            <Button type="submit" variant="primary">Verificar CFDI</Button>
          </Col>
        </Row>
      </Form>

      <p className='datos'>* Datos obligatorios</p>

      {searchResult && (
        <div id="print-container">
          <div ref={tableRef}>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>RFC del emisor</th>
                  <th>Nombre o razón social del emisor</th>
                  <th>RFC del receptor</th>
                  <th>Nombre o razón social del receptor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {searchResult.rfcEmisor}</td>
                  <td>{searchResult.rsEmisor}</td>
                  <td>{searchResult.rfcReceptor}</td>
                  <td>{searchResult.rsReceptor}</td>
                </tr>
              </tbody>
            </table>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>Folio fiscal</th>
                  <th>Fecha de expedición</th>
                  <th>Fecha certificación SAT</th>
                  <th>PAC que certificó</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {searchResult.folioFiscal}</td>
                  <td>{searchResult.expedicion}</td>
                  <td>{searchResult.fechaCertSat}</td>
                  <td>{searchResult.pacCertifico}</td>
                </tr>
              </tbody>
            </table>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>Total del CFDI</th>
                  <th>Efecto del comprobante</th>
                  <th>Estado CFDI</th>
                  <th>Estatus de cancelación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {searchResult.totalCfdi}</td>
                  <td>{searchResult.efeComprobante}</td>
                  <td>{searchResult.estadoCfdi}</td>
                  <td>{searchResult.estatusCancelacion}</td>
                </tr>
              </tbody>
            </table>
            <Row>
              <Col xs lg='4'></Col>
              <Col xs lg='4'></Col>
              <Col xs lg='4'>
                <Button variant="primary" onClick={handlePrint} style={{ marginTop: '30px' }}>Imprimir Tabla</Button>
              </Col>
            </Row>
            <div id="footer" style={{ display: 'none' }}>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Default;
