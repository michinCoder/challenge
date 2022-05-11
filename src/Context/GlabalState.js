import React, { createContext, useReducer } from "react";

const initialState = [
	{ id: 1, name: "Dhoni", quantity: "4", amount: "501" }
];
const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_CUSTOMER":
			return [...state, action.payload];

		case "EDIT_CUSTOMER":
			const updatedEmployee = action.payload;
			const updatedState = state.map((employee) => {
				if (employee.id === updatedEmployee.id) {
					return updatedEmployee;
				}
				return employee;
			});
			return updatedState;

		case "DELETE_CUSTOMER":
			const newState = state.filter(
				(customer) => customer.id !== action.payload
			);

			return newState;

		default:
			return state;
	}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
