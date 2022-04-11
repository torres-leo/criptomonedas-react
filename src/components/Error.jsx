import React from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const ContenedorTexto = styled.div`
	margin: 0 auto;
	background-color: #b7322c;
	margin-top: 30px;
	margin-bottom: 100px;
	padding: 5px 0 5px;
	text-align: center;
	color: #fff;
	border-radius: 5px;
`;

const Texto = styled.p`
	color: #fff;
	font-size: 20px;
	text-transform: uppercase;
	font-family: 'Lato', sans-serif;
	font-weight: 600;
	text-align: center;
	letter-spacing: 2px;
	margin: 15px 0 5px;
`;

const Error = ({ children }) => {
	return (
		<ContenedorTexto>
			<FontAwesomeIcon icon={faCircleExclamation} size='2x' />
			<br />
			<Texto>{children}</Texto>
		</ContenedorTexto>
	);
};

export default Error;
