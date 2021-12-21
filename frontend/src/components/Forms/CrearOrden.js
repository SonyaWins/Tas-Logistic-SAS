import axios from "axios";
import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

import { session_url } from "../../variables/general.js"

export default function CrearOrden(props) {
 
  const crear = e => {
    e.preventDefault();

    let orden = {
      origien: e.target.origen.value,
      destino: e.target.destino.value,
      dimensiones: e.target.dimensiones.value,
      peso: e.target.peso.value,
      precio: e.target.precio.value,
      estado: e.target.estado.value
    }
    
    let axioData = {
      originPort: orden.origen,
      destinationPort: orden.destino,
      orderID:props.data.length + 1,
      orderDescription: "",
      orderWeight:orden.peso,
      containerMeasures:orden.dimensiones,
      orderStatus:orden.estado,
    }
    //let data = [...props.data, orden]

    axios.post(`${session_url}/orders/create`, {axioData})
    .then(res=>{
      console.log(res.data);
    })
    //props.setData(data);
    //props.close();
  }
  return (
      <Form onSubmit={crear}>
        <Row>   
          <Col md="12">
            <FormGroup>
              <label>Puerto Origen</label>
              <Input required name="origen"type="text" />
            </FormGroup>
          </Col>
        </Row>
            
        <Row>
          <Col md="12">
            <FormGroup>
              <label>Puerto destino</label>
              <Input required name="destino" type="text" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <label>Dimensiones</label>
              <Input required name="dimensiones" type="number" />
            </FormGroup>
          </Col>
        </Row>


        <Row>
          <Col md="12">
            <FormGroup>
              <label>Peso</label>
              <Input required name="peso" type="number" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <label>Precio</label>
              <Input required name="precio" type="number" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <label>Estado</label>
              <Input required name="estado" type="text" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <div className="ml-auto mr-auto">
              <Button color="primary" type="submit"> Crear </Button>
          </div>
        </Row>
      </Form>
    )
}