import './App.css';
import Button from './componentes/Button'
import Contador from './componentes/Contador'
import freecodecampLogo from './img/freecodecamp-logo.png'
import { useState } from 'react'

function App() {

	//usestate para estados
	//estado en 0
	const [numClics, setNumClics] = useState(0)

	const manejarClick = () => {
		//Aumentar estado en 1
		setNumClics(numClics + 1)
	}

	const reiniciarContador = () => {
		//reinciar estado en 0
		setNumClics(0)
	}

	return (
		//Aplicación principal
		<div className="App">
			{/* Logo */}
			<div className='freecodecamp-logo-contenedor'>
				<img 
				className='freecodecamp-logo'
				src={freecodecampLogo}
				alt='Logo de freeCodeCamp' />
			</div>
			{/* Contador y botones */}
			<div className='contenedor-principal'>
				<Contador 
				numClics={numClics} />
				{/* 2 botones con parámetros a enviar a /componentes */}
				<Button 
				texto='Click!' //texto dentro de botón
				esBotonDeClick={true} //boolean para asignar clases según tipo de botón
				manejarClick={manejarClick} /> {/* Función para gestionar clics */}
				<Button
				texto='Reiniciar'
				esBotonDeClick={false}
				manejarClick={reiniciarContador} />
			</div>
		</div>
	);
}

export default App;
