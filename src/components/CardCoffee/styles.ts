import styled from 'styled-components'

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 19.375rem;
	width: 16rem;
	background: ${(props) => props.theme['base-card']};
	border-radius: 6px 36px;
	padding: 0 1.5rem 1.25rem;

	img {
		position: relative;
		bottom: 1.25rem;
		max-width: 7.5rem;
		max-height: 7.5rem;
	}

	h2 {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 130%;
		text-align: center;
		margin-top: 1rem;
	}

	& > span {
		font-family: 'Roboto', sans-serif;
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 130%;
		text-align: center;
		color: ${(props) => props.theme['base-label']};
	}
`
export const BuyContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	margin-top: 2.063rem;
	width: 100%;
	height: 2.375rem;
	top: 0;

	label {
		font-size: 1.5rem;
		font-family: 'baloo 2', sans-serif;
		font-weight: 800;
		line-height: 160%;

		span {
			font-size: 0.875rem;
			font-family: 'Roboto', sans-serif;
			font-weight: 400;
			line-height: 160%;
		}

		color: ${(props) => props.theme['base-text']};
	}
`

export const ActionButtons = styled.div`
	display: flex;
	height: inherit;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`

export const LabelBoxContainer = styled.div`
	display: flex;
	gap: 0.25rem;
`
