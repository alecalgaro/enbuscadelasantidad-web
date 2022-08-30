import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import data from "./data.json";
import iconDonate from "../img/icons/icon-colaborar.webp";

const Donate = ({ i }) => {
	return (
		<DonateContainer id="donate">
			<SectionTitle title={data[i].title_donate} />

			<div className="description">
				<p>{data[i].donate}</p>
			</div>

			<div className="contenido">
				<Card hide={i}>
					<img src={iconDonate} alt="Icono colaborar" />
					<h3>{data[i].mercado_pago}</h3>
					<p>{data[i].mercado_pago2}</p>
					<button>
						<a href="https://cafecito.app/enbuscadelasantidad" target="_blank">
							{data[i].title_donate}
						</a>
					</button>
				</Card>

				<Card hide={0}>
					<img src={iconDonate} alt="Icono colaborar" />
					<h3>{data[i].paypal}</h3>
					<p>{data[i].paypal2}</p>
					<button>
						<a href="https://www.paypal.com/paypalme/alejandrocalgaro" target="_blank">
							{data[i].title_donate}
						</a>
					</button>
				</Card>
			</div>
		</DonateContainer>
	);
};

export default Donate;

const DonateContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 0.5rem 0 0.5rem;

	.description {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--bg-grey);
		border-radius: 2rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		width: 80%;
		margin-bottom: 2rem;

		@media (min-width: 768px) {
			width: 50%;
		}

		p {
			font-size: 1.6rem;
			color: var(--grey-text);
			text-align: center;
			margin: 1rem;
		}
	}

	.contenido {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media (min-width: 768px) {
			flex-direction: row;
		}
	}
`;

const Card = styled.div`
	display: ${(props) => (props.hide != 0 ? "none" : "flex")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-grey);
	border-radius: 2rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	width: 80%;
	margin-bottom: 3rem;

	img {
		margin: 3rem 0;
		width: 8rem;
	}

	h3 {
		font-size: 2rem;
		text-align: center;
		margin: 0;
		color: var(--grey-text);
	}

	p {
		font-size: 1.6rem;
		text-align: center;
		margin: 2rem;
		color: var(--grey-text);
	}

	button {
		border: none;
		width: 12rem;
		height: 3rem;
		margin-bottom: 3rem;
		font-size: 1.8rem;
		font-weight: 300;
		border-radius: 1rem;
		border: 2px solid var(--rojo);
		cursor: pointer;
		background-color: var(--rojo);
		transition: all 0.3s;

		a {
			color: var(--white);
		}

		@media (hover: hover) {
			&:hover {
				background: var(--white);

				a {
					color: var(--rojo);
				}
			}
		}
	}

	@media (min-width: 768px) {
		width: 40%;
		margin: 0 3rem;
	}

	@media (min-width: 992px) {
		width: 30%;
		margin: 0 3rem;
	}
`;
