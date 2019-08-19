import React, { Components } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

class Agentapp extends React.Component {
	render() {
		return (
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
						<Nav.Item>
							<Nav.Link href="/home">Active</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-1">Link-1</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-2">Link-2</Nav.Link>
						</Nav.Item>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-light">Search</Button>
					</Form>
				</Container>
			</Navbar>
		);
	}
}

export default Agentapp;
