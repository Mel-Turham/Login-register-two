import './App.css';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/Register' element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
