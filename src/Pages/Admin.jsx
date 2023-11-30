import React, { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Admin = () => {

  const [rfcEmisor, setRFCEmisor] = useState('');
  const [rsEmisor, setRSEmisor] = useState('');
  const [rfcReceptor, setRFCReceptor] = useState('');
  const [rsReceptor, setRSReceptor] = useState('');
  const [folioFiscal, setFolioFiscal] = useState('');
  const [expedicion, setExpedicion] = useState('');
  const [fechaCertSat, setFechaCertSat] = useState('');
  const [pacCertifico, setPacCertifico] = useState('');
  const [totalCfdi, setTotalCfdi] = useState('');
  const [efeComprobante, setEfeComprobante] = useState('');
  const [estadoCfdi, setEstadoCfdi] = useState('');
  const [estatusCancelacion, setEstatusCancelacion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://verificacfdi-server.vercel.app/api/books', {
        rfcEmisor, rsEmisor, rfcReceptor, rsReceptor, folioFiscal, expedicion, fechaCertSat, pacCertifico, totalCfdi, efeComprobante, estadoCfdi, estatusCancelacion
      });
      console.log('Libro guardado exitosamente.');
    } catch (error) {
      console.error('Error al guardar el libro:', error);
    }
  };

  return (
    <Container style={{ marginTop: '30px' }}>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                RFC del emisor
                <Form.Control type="text" value={rfcEmisor} onChange={(e) => setRFCEmisor(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre o razón social del emisor
                <Form.Control type="text" value={rsEmisor} onChange={(e) => setRSEmisor(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                RFC del receptor
                <Form.Control type="text" value={rfcReceptor} onChange={(e) => setRFCReceptor(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre o razón social del receptor
                <Form.Control type="text" value={rsReceptor} onChange={(e) => setRSReceptor(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Folio fiscal
                <Form.Control type="text" value={folioFiscal} onChange={(e) => setFolioFiscal(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Fecha de expedición
                <Form.Control type="text" value={expedicion} onChange={(e) => setExpedicion(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Fecha certificación SAT
                <Form.Control type="text" value={fechaCertSat} onChange={(e) => setFechaCertSat(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                PAC que certificó
                <Form.Control type="text" value={pacCertifico} onChange={(e) => setPacCertifico(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Total del CFDI
                <Form.Control type="text" value={totalCfdi} onChange={(e) => setTotalCfdi(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Efecto del comprobante
                <Form.Control type="text" value={efeComprobante} onChange={(e) => setEfeComprobante(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Estado CFDI
                <Form.Control type="text" value={estadoCfdi} onChange={(e) => setEstadoCfdi(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs lg="4">
            <Form.Group className="mb-3">
              <Form.Label>
                Estatus de cancelación
                <Form.Control type="text" value={estatusCancelacion} onChange={(e) => setEstatusCancelacion(e.target.value)} />
              </Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" variant="primary">Guardar</Button>
      </Form>
    </Container>
  );
}

export default Admin;
