import Home from '../home/Home.js';
import Header from '../../../components/header/Header.js';
import './style.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<main className='App'>
			<Header />
			<Outlet />
		</main>
	);
}

export default App;
