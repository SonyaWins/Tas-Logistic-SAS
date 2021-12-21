import axios from "axios";
import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";

// auth: {
// 	username: 'janedoe',
// 	password: 's00pers3cret'
//   }

// async function Login(){
// 	await axios.post(session_url, {}, {
// 		auth: {
// 		  username: uname,
// 		  password: pass
// 		}
// 	  });
// }

export default function login(props) {
	const session_url = "";

	const submit = (e) => {
		e.preventDefault();

		console.log("username " + e.target.username.value);
		console.log("password" + e.target.password.value);

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