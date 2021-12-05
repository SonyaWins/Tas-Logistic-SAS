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
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User() {
  return (
    <>
      <div className="content d-flex justify-content-center">
        <Card className="card-user w-75">
          
          <CardHeader>
            <CardTitle tag="h5">Editar Perfil de Usuario</CardTitle>
          </CardHeader>

          <CardBody>
            <Form>
              
              <Row>   
                <Col md="6">
                  <FormGroup>
                    <label>Nombre de usuario</label>
                    <Input
                      placeholder="Nombre de usuario"
                      type="text"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label htmlFor="exampleInputEmail1">
                      Correo
                    </label>
                    <Input placeholder="Email" type="email" />
                  </FormGroup>
                </Col>
              </Row>
              
              <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Nombre(s)</label>
                    <Input
                      placeholder="Nombre"
                      type="text"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label>Apellido(s)</label>
                    <Input
                      placeholder="Apellido"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <hr />
                  <h6>Cambiar contraseña</h6>
                </Col>
              </Row>
              
              <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Contraseña actual</label>
                    <Input
                      type="password"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label>Nueva Contraseña</label>
                    <Input
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <div className="update ml-auto mr-auto">
                  <Button
                    color="primary"
                    type="submit"
                  >
                    Guardar cambios
                  </Button>
                </div>
              </Row>

            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default User;
