import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";

export default function login(props) {
	
	return (
		<Form>
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