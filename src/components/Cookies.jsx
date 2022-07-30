import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import BtnCerrar from "../img/icons/icono-close.svg";

const Cookies = ({ i }) => {
	const [cookies, setCookies] = useState(true);
	const [more, setMore] = useState(false);

	const saveCookies = () => {
		localStorage.setItem("cookies", "accept");
		setCookies(false);
	};

	const saveMore = (e) => {
		e.preventDefault();
		setMore(!more);
	};

	return (
		<>
			{cookies && !more ? (
				<Container>
					<div className="cookies">
						<p>{data[i].cookies}</p>
						<div className="buttons">
							<button onClick={() => saveCookies()}>{data[i].accept}</button>
							<button onClick={(e) => saveMore(e)}>
								<a href="">{data[i].more}</a>
							</button>
						</div>
					</div>
				</Container>
			) : null}

			{more ? (
				<More>
					<div className="container-more">
						<button>
							<img src={BtnCerrar} alt="Botón para cerrar el aviso" onClick={(e) => saveMore(e)} />
						</button>
						<h2 className="titulo-seccion h3">Aviso de Cookies</h2>
						<br />
						<h4 className="medium-italic">¿Qué son las cookies?</h4>
						<p className="text-muted">
							Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas
							páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y
							recuperar información sobre los hábitos de navegación de un usuario o de su equipo y,
							dependiendo de la información que contengan y de la forma en que utilice su equipo,
							pueden utilizarse para reconocer al usuario.
						</p>

						<h4 className="medium-italic">¿Cómo desactivar las cookies?</h4>
						<p className="text-muted">
							Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante
							la configuración de las opciones del navegador instalado en su ordenador.
							<br />A continuación puede acceder a la configuración de los navegadores webs más
							frecuentes para aceptar, instalar o desactivar las cookies:
						</p>
						<p className="text-muted">
							<a
								href="https://support.google.com/chrome/answer/95647?hl=es"
								target="_blank"
								rel="noopener"
							>
								Configurar cookies en Google Chrome
							</a>
						</p>

						<p className="text-muted">
							<a
								href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
								target="_blank"
								rel="noopener"
							>
								Configurar cookies en Microsoft Edge
							</a>
						</p>

						<p className="text-muted">
							<a
								href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&amp;redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we"
								target="_blank"
								rel="noopener"
							>
								Configurar cookies en Mozilla Firefox
							</a>
						</p>

						<p className="text-muted">
							<a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener">
								Configurar cookies en Safari (Apple)
							</a>
						</p>

						<h4 className="medium-italic">Cookies de terceros.</h4>
						<p className="text-muted">
							Esta página web utiliza servicios de terceros para recopilar información con fines
							estadísticos y de uso de la web.
						</p>
					</div>
				</More>
			) : null}
		</>
	);
};

export default Cookies;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	position: fixed;
	bottom: 0;
	margin: 1rem 0;
	z-index: 9;

	.cookies {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--celeste);
		opacity: 0.9;
		border-radius: 2rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		width: 80%;
		padding: 1rem;

		@media (min-width: 768px) {
			width: 50vw;
		}

		@media (min-width: 992px) {
			flex-direction: row;
			p {
				margin: 0;
			}
		}

		p {
			text-align: center;
			font-size: 1.5rem;
			color: var(--grey-text);
			margin-right: 2rem;
		}

		.buttons {
			display: flex;
			align-items: center;
			gap: 4rem;

			@media (min-width: 992px) {
				gap: 2rem;
			}

			button {
				background: var(--amarillo);
				border: none;
				width: 8rem;
				height: 3rem;
				font-size: 1.4rem;
				color: var(--white);
				border-radius: 1rem;
				cursor: pointer;
			}

			a {
				color: var(--white);
			}
		}
	}
`;

const More = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	background-color: var(--bg-grey);
	z-index: 99;

	.container-more {
		width: 90%;
		justify-content: center;
		align-items: center;
		/* position: absolute;
    top: 5rem; */
		h2,
		h4 {
			color: var(--amarillo);
		}
		p {
			font-size: 1.4rem;
		}

		button {
			width: 3rem;
			position: absolute;
			top: 4rem;
			right: 3rem;
			border: none;
			cursor: pointer;
			background-color: var(--bg-grey);
		}

		@media (min-width: 768px) {
			width: 70%;
			button {
				right: 4rem;
			}
		}
	}
`;
