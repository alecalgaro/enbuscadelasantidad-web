import React, { useState } from "react";
import styled from "styled-components";

import imgBackgroud from "../img/fondo.webp";
import iconSpanish from "../img/icons/icon-spanish.webp";
import iconEnglish from "../img/icons/icon-english.webp";
import iconItalian from "../img/icons/icon-italian.webp";
import iconPortuguese from "../img/icons/icon-portuguese.webp";
import iconFrench from "../img/icons/icon-french.webp";
import iconLanguages from "../img/icons/icon-languages.webp";
import data from "./data.json";

import { motion } from "framer-motion";

const Header = ({ i }) => {
	const saveLanguage = (language) => {
		localStorage.setItem("language", language);
		window.location.reload(); // actualiza la pagina
	};

	const [hideIcons, setHideIcons] = useState(true);

	return (
		<>
			<ImageBackground src={imgBackgroud} className="img-background" alt="imagen de fondo" />
			<HeaderContainer
				id="home"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<Logo>
					<img src={data[i].img_logo} alt="logo header" />
				</Logo>

				<HeaderDescription>
					<h1>
						<span>{data[i].header1}</span>
						<br />
						{data[i].header2}
					</h1>
					<p>{data[i].header3}</p>

					<Buttons>
						<button>
							<a
								href="https://drive.google.com/file/d/1q4pKuPM2Flax5hUr6_GQjakA33gcMS8d/view?usp=sharing"
								target="_blank"
							>
								{data[0].btn_trailer}
							</a>
						</button>
						<button>
							<a href="#play">{data[i].btn_play}</a>
						</button>
					</Buttons>
				</HeaderDescription>

				<Languages>
					<LanguagesButtons hideIcons={hideIcons}>
						<div>
							<button onClick={() => saveLanguage("spanish")}>
								<img src={iconSpanish} alt="icono español" />
							</button>
							<p>ES</p>
						</div>
						<div>
							<button onClick={() => saveLanguage("english")}>
								<img src={iconEnglish} alt="icono ingles" />
							</button>
							<p>EN</p>
						</div>
						<div>
							<button onClick={() => saveLanguage("italian")}>
								<img src={iconItalian} alt="icono italiano" />
							</button>
							<p>IT</p>
						</div>
						<div>
							<button onClick={() => saveLanguage("portuguese")}>
								<img src={iconPortuguese} alt="icono portugues" />
							</button>
							<p>PT</p>
						</div>
						<div>
							<button onClick={() => saveLanguage("french")}>
								<img src={iconFrench} alt="icono frances" />
							</button>
							<p>FR</p>
						</div>
					</LanguagesButtons>
					<button onClick={() => setHideIcons(!hideIcons)}>
						<img src={iconLanguages} alt="icono idiomas" />
					</button>
				</Languages>
			</HeaderContainer>
		</>
	);
};

export default Header;

const ImageBackground = styled.img`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: -1;
	object-fit: cover;
	animation: animacion-fondo 20s linear infinite alternate-reverse;

	@keyframes animacion-fondo {
		from {
			object-position: -800px 0;
		}
		to {
			object-position: 0 0;
		}
	}

	@media (max-width: 768px) and (orientation: landscape) {
		animation: none;
	}
`;

const HeaderContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;

	@media (min-width: 992px) {
		flex-direction: row-reverse;
	}

	@media (max-width: 812px) and (orientation: landscape) {
		margin-top: 8rem;
	}
`;

const Logo = styled.div`
	img {
		width: 28rem;
		animation: logo 1.85s linear infinite alternate-reverse;

		@media (min-width: 756px) {
			width: 35rem;
		}

		@media (min-width: 992px) {
			width: 50rem;
			padding: 2rem;
		}
	}

	@keyframes logo {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(15px);
		}
	}
`;

const HeaderDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 2.5rem;
	order: 1;

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
	}

	span {
		color: var(--amarillo);
	}

	p {
		margin: 1.5rem 0 2rem 0;
		color: var(--grey-text);
		font-size: 1.6rem;
		text-align: center;
	}

	@media (min-width: 768px) {
		width: 70%;

		h1 {
			font-size: 3rem;
		}
	}

	@media (min-width: 1200px) {
		width: 50%;
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;

	button {
		background: var(--amarillo);
		border: none;
		width: 9rem;
		height: 3rem;
		font-size: 1.8rem;
		font-weight: 300;
		border-radius: 1rem;
		cursor: pointer;
		border: 2px solid var(--amarillo);
		transition: all 0.3s;

		a {
			color: var(--white);
		}

		@media (hover: hover) {
			&:hover {
				background: var(--white);

				a {
					color: var(--amarillo);
				}
			}
		}
	}
`;

const Languages = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 5rem;
	right: 1rem;

	@media (min-width: 756px) {
		top: 6rem;
		right: 2rem;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
		transition: all 0.3s;
	}
`;

const LanguagesButtons = styled.div`
	display: ${(props) => (props.hideIcons ? "none" : "flex")};
	gap: 1rem;
	margin-right: 1.5rem;

	p {
		font-size: 1.2rem;
		color: var(--grey-text);
		text-align: center;
		margin: 0.5rem 0 0 0;
	}

	img {
		width: 4rem;
	}

	@media (hover: hover) {
		button:hover {
			transform: scale(1.1);
		}
	}
`;
