import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../Context/GlabalState";

import { Table } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function CustomerList({ editCustomer }) {
	const { state, dispatch } = useContext(GlobalContext);

	const deleteCustomer = (customer) => {
		dispatch({
			type: "DELETE_CUSTOMER",
			payload: customer.id,
		});

		console.log(customer.id);
	};
	return (
		<>
			<h2 className='heading'>Customers List</h2>
			<Table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Quantity</th>
						<th>Amount</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{state.map((customer) => {
						return (
							<tr key={customer.id}>
								<td>{customer.name}</td>
								<td>{customer.quantity}</td>
								<td>{customer.amount}</td>
								<td>
									<span className='edit' onClick={() => editCustomer(customer)}>
										<BiEditAlt />
									</span>
									<span
										className='delete'
										onClick={() => deleteCustomer(customer)}>
										<MdDelete />
									</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
}

export default CustomerList;
