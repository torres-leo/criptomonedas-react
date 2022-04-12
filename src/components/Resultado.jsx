import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;

	display: flex;
	align-items: center;
	gap: 2rem;
	margin-top: 30px;

	@media (max-width: 375px) {
		flex-direction: column;
	}
`;

const Imagen = styled.img`
	display: block;
	width: 150px;
`;

const Texto = styled.p`
	font-size: 18px;
	span {
		font-weight: 700;
		color: #fff;
	}
`;

const Precio = styled.p`
	font-size: 30px;
	span {
		font-weight: 700;
		color: #0cac24;
	}
`;

const Resultado = ({ cotizacion }) => {
	// console.log(cotizacion);
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion;

	const formatear = (cantidad) => {
		const cantidadFormateada = Number(cantidad);
		return cantidadFormateada;
	};
	return (
		<Contenedor>
			<Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen Cripto' />
			<div>
				<Precio>
					El precio es de: <span>{PRICE}</span>
				</Precio>
				<Texto>
					Precio más alto del día: <span>{HIGHDAY}</span>
				</Texto>
				<Texto>
					Precio más bajo del día: <span>{LOWDAY}</span>
				</Texto>
				<Texto>
					Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
				</Texto>
				<Texto>
					Ultima actualización: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</Contenedor>
	);
};

export default Resultado;
