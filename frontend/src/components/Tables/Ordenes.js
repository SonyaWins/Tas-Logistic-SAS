import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table
} from "reactstrap";

export default function Ordenes(props) {

    return (
        <Card>
            <CardHeader>
            <CardTitle className="d-inline-block" tag="h4">Ordenes</CardTitle>
            
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