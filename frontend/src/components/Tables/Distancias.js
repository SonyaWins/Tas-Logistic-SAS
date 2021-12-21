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

import CrearDistancia from "../Forms/CrearDistancia.js"
import compareStrings from "util/compareStrings.js";

export default function Distancias(props) {
    const [show, setShow] = useState(false);
    const [searchParms, setSearchParms] = useState({
        puertoA: "",
        puertoB: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSearchParms(
            {
                puertoA: e.target.puertoA.value,
                puertoB: e.target.puertoB.value
            }
        )
    }
    
    const [data, setData] = useState([
        {
            puertoA: "Puerto Colombia",
            puertoB: "Cartagena",
            distancia: 100
        },
        {
            puertoA: "Puerto Colombia",
            puertoB: "Santa Marta",
            distancia: 200
        }
    ]);

    return (
      <>
        <Card className="">
            <CardHeader>
            <CardTitle tag="h4">Distancia</CardTitle>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col md="6">
                    <FormGroup>
                    <label>Puerto A</label>
                    <Input name="puertoA" type="text" />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                    <label>Puerto B</label>
                    <Input name="puertoB" type="text" />
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
                    <th>Puerto A</th>
                    <th>Puerto B</th>
                    <th>Distancia</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((element, key) => {
                        if (searchParms.puertoA === "" && searchParms.puertoB === "") {
                            return <tr key={key}>
                                <td>{element.puertoA}</td>
                                <td>{element.puertoB}</td>
                                <td>{element.distancia}</td>
                            </tr>
                        } else {
                            if (compareStrings(element.puertoA, searchParms.puertoA) ||
                                compareStrings(element.puertoA, searchParms.puertoB) ||
                                compareStrings(element.puertoB, searchParms.puertoA) ||
                                compareStrings(element.puertoB, searchParms.puertoB)) {

                                    return <tr key={key}>
                                        <td>{element.puertoA}</td>
                                        <td>{element.puertoB}</td>
                                        <td>{element.distancia}</td>
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
          <CrearDistancia close={handleClose} data={data} setData={setData} />
        </ModalBody>
      </Modal>
      </>
    )
}