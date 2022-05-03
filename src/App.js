import './App.css';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Exibicao } from './components/Exibicao';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path="/" element={<Formulario />} />
					<Route exact path="/exibicao" element={<Exibicao />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
