import styled from 'styled-components'

export const CheckoutContainer = styled.div`
	display: flex;
	gap: 2rem;
	position: relative;
	margin-top: 2.5rem;
`
const BoxBase = styled.div`
	display: flex;
	flex-direction: column;

	& > h2 {
		font-family: 'Baloo 2 ', sans-serif;
		font-weight: 700;
		line-height: 130%;
		font-size: 1.125rem;
		margin-bottom: 0.938rem;

		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const BoxForm = styled(BoxBase)`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 40.625rem;
`
export const BoxPayment = styled(BoxBase)`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 40.625rem;
	background: ${(props) => props.theme['base-card']};
	padding: 2.5rem;
	margin-top: 0.75rem;
	border-radius: 6px;
`

export const BoxCart = styled(BoxBase)`
	display: flex;
	flex-direction: column;
	flex: 0.5;
	max-width: 28rem;
`

export const CompleteOrderForm = styled.div`
	display: flex;
	background: ${(props) => props.theme['base-card']};
	flex-direction: column;
	flex: 1;
	max-width: inherit;
	padding: 2.5rem;
	border-radius: 6px;
`
export const CheckoutCart = styled.div`
	display: flex;
	background: ${(props) => props.theme['base-card']};
	flex-direction: column;
	flex: 0.5;
	max-width: inherit;
	padding: 2.5rem;
	border-radius: 6px 40px;
`
const FormHeader = styled.div`
	display: flex;
	position: relative;
	margin-bottom: 2rem;
	gap: 0.5rem;
`

export const HeaderDeliveryAddressBox = styled(FormHeader)`
	& > svg {
		color: ${(props) => props.theme['yellow-dark']};
	}
`

export const HeaderPaymentBox = styled(FormHeader)`
	& > svg {
		color: ${(props) => props.theme.purple};
	}
`

export const HeaderTextBox = styled.div`
	font-family: 'Roboto', sans-serif;
	line-height: 130%;
	font-weight: 400;

	& > h3 {
		font-size: 1rem;
		font-weight: normal;
		color: ${(props) => props.theme['base-subtitle']};
	}

	& > span {
		font-size: 0.875rem;
		color: ${(props) => props.theme['base-text']};
	}
`

export const FormBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 0.75rem;
	row-gap: 1rem;
`

const BaseInput = styled.input`
	display: flex;
	background: ${(props) => props.theme['base-input']};
	height: 2.625rem;
	border: 1px solid ${(props) => props.theme['base-button']};
	border-radius: 4px;
	padding: 0.75rem;

	color: ${(props) => props.theme['base-text']};
	font-family: 'Roboto', sans-serif;
	font-size: 0.875rem;
	line-height: 130%;

	&::placeholder {
		color: ${(props) => props.theme['base-label']};
	}
`

export const PostalCodeInput = styled(BaseInput)`
	max-width: 12.5rem;
`
export const StreetInput = styled(BaseInput)`
	flex-basis: 100%;
`
export const NumberInput = styled(BaseInput)`
	max-width: 12.5rem;
`
export const OptionalBox = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	flex: 1;

	& > span {
		position: absolute;
		font-family: 'Roboto', sans-serif;
		color: ${(props) => props.theme['base-label']};
		right: 0.75rem;
		font-size: 0.75rem;
		line-height: 130%;
		font-style: italic;
	}
`

export const ComplementInput = styled(BaseInput)`
	flex: 1;
`
export const NeighborhoodInput = styled(BaseInput)`
	max-width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
	flex: 1;
`
export const StateInput = styled(BaseInput)`
	max-width: 3.75rem;
`
export const ButtonGroupContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 0.75rem;

	& > button {
		display: flex;
		flex: 1;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		line-height: 130%;
		font-size: 0.75rem;
		color: ${(props) => props.theme['base-text']};
		padding: 1rem;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		gap: 0.75rem;

		& > svg {
			color: ${(props) => props.theme.purple};
		}
	}
`
