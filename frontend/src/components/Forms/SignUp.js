import axios from "axios";

import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";

import { session_url } from "../../variables/general.js"

export default function SignUp(props) {

	const submit = (e) => {
		e.preventDefault();

		console.log("username " + e.target.username.value);
		console.log("password " + e.target.password.value);

		axios.post(session_url, {}, {
			auth: {
			  username: e.target.username.value,
			  password: e.target.password.value
			}
		}).then((response) =>
			console.log(response)
		);	  
	}


  return (
		<Form onSubmit={submit}>
              
      <Row>   
        <Col md="6">
          <FormGroup>
            <label>Nombre de usuario</label>
            <Input name="username" required type="text" />
          </FormGroup>
        </Col>

        <Col md="6">
          <FormGroup>
            <label>Correo</label>
            <Input name="email" required type="email" />
          </FormGroup>
        </Col>
      </Row>
      
      <Row>
        <Col md="6">
          <FormGroup>
            <label>Nombre(s)</label>
            <Input name="name" required type="text" />
          </FormGroup>
        </Col>

        <Col md="6">
          <FormGroup>
            <label>Apellido(s)</label>
            <Input name="lastname" required type="text" />
          </FormGroup>
        </Col>
      </Row>
      
      <Row>
        <Col md="12">
          <FormGroup>
            <label>Contraseña</label>
            <Input name="password" required type="password" />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <div className="update ml-auto mr-auto">
          <Button
            color="primary"
            type="submit" >
            Ingresar
          </Button>
        </div>
      </Row>

    </Form>
	)
}