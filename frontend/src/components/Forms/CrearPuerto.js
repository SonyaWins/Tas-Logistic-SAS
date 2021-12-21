import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function CrearPuerto(props) {
  const crear = e => {
    e.preventDefault()

    let data = [...props.data, {
      nombre: e.target.nombre.value,
      pais: e.target.pais.value,
      ciudad: e.target.ciudad.value
    }]

    props.setData(data);
    props.close();
  }  
  return (
    <Form onSubmit={crear}>
      <Row>   
        <Col md="12">
          <FormGroup>
            <label>Nombre del puerto</label>
            <Input required name="nombre"type="text" />
          </FormGroup>
        </Col>
      </Row>
          
      <Row>
        <Col md="12">
          <FormGroup>
            <label>País</label>
            <Input required name="pais" type="text" />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <FormGroup>
            <label>Ciudad</label>
            <Input required name="ciudad" type="text" />
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