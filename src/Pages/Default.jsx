import React, { useState, useRef } from 'react';
import axios from 'axios';
import HCaptcha from 'react-hcaptcha';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/index.css';

import Footer from './Footer';

import hacienda from '../images/hacienda.jpg'

const Default = () => {

  const [folioFiscal, setFolioFiscal] = useState('')

  const [searchResult, setSearchResult] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const tableRef = useRef();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    // if (!captchaToken) {
    //   alert('Por favor, complete el captcha.');
    //   return;
    // }

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

  return (
    <Container style={{ height: '100vh' }}>
      <div className="logohacienda"><img src={hacienda} alt="" /></div>
      <h1 className='search'>Verificación de comprobantes fiscales digitales por internet</h1>
      <hr />
      <label className='certificate'>A través de esta opción, usted podrá verificar si el comprobante fue certificado por el SAT</label>
      <Form onSubmit={handleSearchSubmit} className='form'>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Folio fiscal*:
                <Form.Control type="text" value={folioFiscal} onChange={(e) => setFolioFiscal(e.target.value)} required />
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
            <HCaptcha
              sitekey="729646fd-8422-468a-84c0-47892b32d62e"
              onVerify={(token) => setCaptchaToken(token)}
            />
          </Col>
          <Col xs lg='4'></Col>
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
