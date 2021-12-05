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

export default function Puertos(props) {

    return (
        <Card className="card-plain">
            <CardHeader>
            <CardTitle className="d-inline-block" tag="h4">Puertos</CardTitle>
            
            <Form>
                <Row>
                <Col md="6">
                    <FormGroup>
                    <label>Nombre</label>
                    <Input
                        type="text"
                    />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                    <label>Locaciòn</label>
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
                    <th>Nombre</th>
                    <th>Paìs</th>
                    <th>Ciudad</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
            </CardBody>
        </Card>
    )
}