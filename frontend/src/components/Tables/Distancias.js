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

export default function Distancias(props) {
    return (
        <Card className="card-plain">
            <CardHeader>
            <CardTitle tag="h4">Distancia</CardTitle>
            <Form>
                <Row>
                <Col md="6">
                    <FormGroup>
                    <label>Puerto A</label>
                    <Input
                        type="text"
                    />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                    <label>Puerto B</label>
                    <Input
                        type="text"
                    />
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
                    <th>Distancia</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
            </CardBody>
        </Card>    
    )
}