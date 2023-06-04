import styled from 'styled-components'

export const CartProductItemContainer = styled.div`
	display: flex;
	padding: 0.5rem 0.25rem;
	gap: 1.25rem;

	img {
		max-height: 64px;
		max-width: 64px;
	}
`
export const ProductDetailsBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.5rem;
`

export const HeaderDetails = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: 'Roboto', sans-serif;
	line-height: 130%;
	align-items: center;

	span:nth-child(1) {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1rem;
	}

	span:nth-child(2) {
		font-weight: 700;
		color: ${(props) => props.theme['base-text']};
	}
`
export const ButtonsGroup = styled.div`
	display: flex;
	gap: 0.5rem;
`

export const Divider = styled.hr`
	margin: 1.5rem 0;
	border: 1px solid;
	color: ${(props) => props.theme['base-button']};
`
