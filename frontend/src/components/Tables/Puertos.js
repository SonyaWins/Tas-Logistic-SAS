import { useState } from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";

import CrearPuerto from "../Forms/CrearPuerto.js"

import compareStrings from "util/compareStrings.js";

export default function Puertos(props) {
  const [show, setShow] = useState(false);
  const [searchParms, setSearchParms] = useState({
    nombre: "",
    pais: "",
    ciudad: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setSearchParms(
      {
          nombre: e.target.nombre.value,
          pais: e.target.pais.value,
          ciudad: e.target.ciudad.value
      }
  )
  }
  const [data, setData] = useState([
    {
      nombre: "Puerto Colombia",
      pais: "Colombia",
      ciudad: "NA"
    },
    {
      nombre: "Cartagena",
      pais: "Colombia"
    }
  ]);

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle className="d-inline-block" tag="h4">Puertos</CardTitle>
        
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label>Nombre</label>
                  <Input name="nombre" type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>País</label>
                  <Input name="pais" type="text" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label>Ciudad</label>
                  <Input name="ciudad" type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Button type="submit">Buscar</Button>
                <Button onClick={handleShow}>Crear</Button>
              </Col>
            </Row>
            
          </Form>
        </CardHeader>

        <CardBody>
          <Table responsive>
            <thead className="text-primary">
            <tr>
                <th>Nombre</th>
                <th>Paìs</th>
                <th>Ciudad</th>
            </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                if (searchParms.ciudad === "" && searchParms.nombre === "" && searchParms.pais === "") {
                  return <tr>
                    <td>{element.nombre}</td>
                    <td>{element.pais}</td>
                    <td>{element.ciudad}</td>
                  </tr>
                } else {
                  if (compareStrings(element.nombre, searchParms.nombre) || compareStrings(element.pais, searchParms.pais) || compareStrings(element.ciudad, searchParms.ciudad)) {
                    return <tr>
                    <td>{element.nombre}</td>
                    <td>{element.pais}</td>
                    <td>{element.ciudad}</td>
                  </tr>
                  } else {
                    return null;
                  }
                }
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal centered={true} isOpen={show} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>
          Crear Puerto
        </ModalHeader>

        <ModalBody>
          <CrearPuerto data={data} setData={setData} close={handleClose} />
        </ModalBody>
      </Modal>
    </>
  )
}