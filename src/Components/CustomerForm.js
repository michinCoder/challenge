import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlabalState";
import { Form } from "react-bootstrap";

import { v4 } from "uuid";

function CustomerForm({ customerData, editCustomer }) {
	const [customerId, setCustomerId] = useState();
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [amount, setAmount] = useState("");
	const [editMode, setEditMode] = useState(false);

	const { state, dispatch } = useContext(GlobalContext);
	useEffect(() => {
		if (customerData !== null) {
			const { amount, id, name, quantity } = customerData;
			setCustomerId(id);
			setName(name);
			setQuantity(quantity);
			setAmount(amount);
			setEditMode(true);
		}
	}, [state, customerData]);

	const formSubmit = (e) => {
		e.preventDefault();
		const newCustomer = {
			id: !editMode ? v4() : customerId,
			name,
			quantity,
			amount,
		};
		if (!editMode) {
			dispatch({
				type: "ADD_CUSTOMER",
				payload: newCustomer,
			});
			console.log(state);
		} else {
			dispatch({
				type: "EDIT_CUSTOMER",
				payload: newCustomer,
			});
		}
		setName("");
		setQuantity("");
		setAmount("");
		setEditMode(false);
		editCustomer(null);
	};

	return (
		<div className='customerForm'>
			<h3 className='form-heading mb-3'>Customer Details</h3>
			<Form onSubmit={formSubmit}>
				<Form.Group className='mb-3'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Name'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Quantity</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Number of Items'
						onChange={(e) => setQuantity(e.target.value)}
						value={quantity}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Amount'
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
					/>
				</Form.Group>
				<button type='submit' className='submit mt-3'>
					{" "}
					{!editMode ? "ADD EMPLOYEE" : "EDIT EMPLOYEE"}
				</button>
			</Form>
		</div>
	);
}

export default CustomerForm;
