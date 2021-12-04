/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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

function Puertos() {
  return (
    <>
      <div className="content">
        <Row>
        <Col md="6">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Distancia</CardTitle>
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
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle className="d-inline-block" tag="h4">Puertos</CardTitle>
                
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Locaciòn</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
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
          </Col>
        
        </Row>
      </div>
    </>
  );
}

export default Puertos;
