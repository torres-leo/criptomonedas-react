import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	border-radius: 10px;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	font-size: 20px;
	letter-spacing: 5px;
	margin-top: 30px;
	transition: background-color 0.3s ease;

	&:hover {
		cursor: pointer;
		background-color: #717dfe;
	}
`;

const Formulario = ({ setMonedas, setCotizacion }) => {
	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);
	const [moneda, SelectMonedas] = useSelectMonedas('Elige a qué moneda quieres convertir', monedas);
	const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';

			const respuesta = await fetch(url);
			const resultado = await respuesta.json();
			// console.log(resultado.Data);

			const arrayCriptos = resultado.Data.map((cripto) => {
				const objeto = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName,
				};

				return objeto;
			});

			setCriptos(arrayCriptos);
		};
		consultarAPI();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([moneda, criptomoneda].includes('')) {
			setError(true);
			setCotizacion({});

			setTimeout(() => {
				setError(false);
			}, 6000);
			return;
		}
		setError(false);
		setMonedas({ moneda, criptomoneda });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCriptomoneda />
				<InputSubmit type='submit' value='Cotizar' />
			</form>
			{error && <Error>¡ Todos los campos son obligatorios !</Error>}
		</>
	);
};

export default Formulario;
