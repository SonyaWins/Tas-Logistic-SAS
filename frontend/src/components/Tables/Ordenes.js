import axios from "axios";
import React, { useState } from "react";

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

import CrearOrden from "../Forms/CrearOrden.js"

import compareStrings from "util/compareStrings.js";

export default function Ordenes(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const [searchParms, setSearchParms] = useState({
    origien: "",
    destino: "",
    estado: "" 
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParms(
        {
          origien: e.target.origen.value,
          destino: e.target.destino.value,
          estado: e.target.estado.value 
        }
    )
  }

  React.useEffect(() => {
    axios
    .get("http://localhost:3001/orders")
    .then(res=>{

      Object.entries(res.data).forEach((entry) => {
        const [key, value] = entry;

        let orden = {
          origien: value.originPort,
          destino: value.destinationPort,
          dimensiones: value.containerMeasures,
          peso: value.orderWeight,
          precio: value.price,
          estado: value.orderStatus
        }
        setData([...data, orden]); 
      });
    })
  }, []);
  
  return (
    <>
    <Card className="h-100">
      <CardHeader>
        <CardTitle className="d-inline-block" tag="h4">Ordenes</CardTitle>
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label>Origen</label>
                  <Input name="origen" type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>Destino</label>
                  <Input name="destino" type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>Estado</label>
                  <Input name="estado" type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Button type="submit"  >Buscar</Button>
                <Button onClick={handleShow}>Crear</Button>
              </Col>
            </Row>
            
          </Form>
      </CardHeader>

      <CardBody>
        <Table responsive>
          <thead className="text-primary">
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Dimensiones</th>
              <th>Peso</th>
              <th>Precio</th>
              <th>Estado</th>
            </tr>
     
          </thead>
          <tbody>
            {data.map((element, key) => {
              if (searchParms.destino === "" && searchParms.estado === "" && searchParms.origien === "") {
                return <tr key={key}>
                  <td>{element.origien}</td>
                  <td>{element.destino}</td>
                  <td>{element.dimensiones}</td>
                  <td>{element.peso}</td>
                  <td>{element.precio}</td>
                  <td>{element.estado}</td>
                </tr>
              } else {
                if (compareStrings(element.destino, searchParms.destino) || compareStrings(element.origien, searchParms.origien) || compareStrings(element.estado, searchParms.estado)){
                  return <tr key={key}>
                  <td>{element.origien}</td>
                  <td>{element.destino}</td>
                  <td>{element.dimensiones}</td>
                  <td>{element.peso}</td>
                  <td>{element.precio}</td>
                  <td>{element.estado}</td>
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
        Crear Orden
      </ModalHeader>

      <ModalBody>
        <CrearOrden data={data} setData={setData} close={handleClose} />
      </ModalBody>
    </Modal>
    </>
  )
}