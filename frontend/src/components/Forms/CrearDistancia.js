import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function CrearPuerto(props) {
  
  const submit = (e) => {
    e.preventDefault();

    let data = [...props.data, {
      puertoA: e.target.puertoA.value,
      puertoB: e.target.puertoB.value,
      distancia: e.target.distancia.value
    }];

    props.setData(data);
    props.close();
  }
  return (
    <Form onSubmit={submit}>
      <Row>   
        <Col md="12">
          <FormGroup>
            <label>Puerto A</label>
            <Input required name="puertoA"type="text" />
          </FormGroup>
        </Col>
      </Row>
          
      <Row>
        <Col md="12">
          <FormGroup>
            <label>Puerto B</label>
            <Input required name="puertoB" type="text" />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <FormGroup>
            <label>Distancia</label>
            <Input required name="distancia" type="number" />
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