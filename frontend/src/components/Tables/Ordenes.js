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
  Input
} from "reactstrap";

export default function Ordenes(props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="d-inline-block" tag="h4">Ordenes</CardTitle>
        <Form>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label>Origen</label>
                  <Input type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>Destino</label>
                  <Input type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>Estado</label>
                  <Input type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Button>Buscar</Button>
                <Button>Crear</Button>
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
              <th>Precio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}