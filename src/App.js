import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Components/Login';
import ShowData from './Pages/ShowData';

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/formdata" element={<ShowData />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
