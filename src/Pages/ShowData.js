import React, { useState } from "react";

import CustomerForm from "../Components/CustomerForm";
import CustomerList from "../Components/CustomerList";
import { GlobalProvider } from "../Context/GlabalState";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	const [editCustData, setEditCustData] = useState(null); //get customer data in edit mode

	const editCustomer = (customer) => {
		console.table(customer);
		setEditCustData(customer);
	};

	return (
		<GlobalProvider>
			<Container className='main'>
				<Row>
					<Col md={8}>
						<CustomerList editCustomer={editCustomer} />
					</Col>
					<Col md={4}>
						<CustomerForm
							customerData={editCustData}
							editCustomer={editCustomer}
						/>
					</Col>
				</Row>
			</Container>
		</GlobalProvider>
	);
}

export default App;
