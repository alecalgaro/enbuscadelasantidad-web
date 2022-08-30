import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import data from "./data.json";
import iconInstagram from "../img/icons/icon-instagram.png";

const About = ({ i }) => {
	return (
		<AboutContainer id="about">
			<SectionTitle title={data[i].title_about} />
			<AboutCard>
				<img src={data[i].img_about} alt="Foto de nosotros" />
				<div className="about-description">
					<p>
						{data[i].about1}
						<br />
						{data[i].about2}
					</p>
					<div className="instagram">
						<a href="https://www.instagram.com/click.creando">
							<img src={iconInstagram} alt="Icono instagram" className="icon" />
						</a>
						<a href="https://www.instagram.com/alecalgaro">
							<img src={iconInstagram} alt="Icono instagram" className="icon" />
						</a>
					</div>
				</div>
			</AboutCard>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 0.5rem;
`;

const AboutCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	background-color: var(--bg-grey);
	border-radius: 2rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	img {
		width: 95%;
		padding: 2rem 0;
	}

	p {
		font-size: 1.5rem;
		text-align: center;
		color: var(--grey-text);
		padding: 0 2rem 2rem 2rem;
		margin: 0;
	}

	.instagram {
		display: flex;
		justify-content: center;
		gap: 5rem;
	}

	.icon {
		width: 3.5rem;
		padding: 0 0 2rem 0;
		transition: all 0.5s;
	}

	@media (hover: hover) {
		.icon:hover {
			transform: scale(1.1);
		}
	}

	@media (min-width: 576px) {
		width: 60%;
	}

	@media (min-width: 992px) {
		width: 80%;
		flex-direction: row;

		img {
			width: 50%;
			padding: 2rem;
		}

		p {
			font-size: 1.5rem;
			width: 100%;
			padding: 2rem;
			margin: 0;
		}

		.about-description {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;
