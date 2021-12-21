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

export default function login(props) {

	const submit = (e) => {
		e.preventDefault();

		axios.post(`${session_url}/login`,{
			userñame: e.target.username.value,
			passwordHash: e.target.password.value
		}).then((response) =>
			console.log(response)
		).catch(error => {
				console.log("Error ========>", error);
		});	  
	}

	return (
		<Form onSubmit={submit}>
			<Row>   
				<Col md="12">
					<FormGroup>
						<label>Nombre de usuario</label>
						<Input required name="username"type="text" />
					</FormGroup>
				</Col>
			</Row>
				
			<Row>
				<Col md="12">
					<FormGroup>
						<label>Contraseña</label>
						<Input required name="password" type="password" />
					</FormGroup>
				</Col>
			</Row>

			<Row>
				<div className="ml-auto mr-auto">
					<Button color="primary" type="submit"> Ingresar </Button>
				</div>
			</Row>
		</Form>
	)
}