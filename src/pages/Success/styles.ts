import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import styled from 'styled-components'

export const SuccessContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;
	align-items: flex-end;
	flex-wrap: wrap;

	& > img {
		max-height: 18.25rem;
		max-width: 30.75rem;
	}
`
export const SummaryBox = styled.div`
	display: flex;
	flex-direction: column;

	& > h1 {
		font-family: 'Baloo 2', sans-serif;
		font-size: 2rem;
		font-weight: 800;
		line-height: 130%;
		color: ${(props) => props.theme['yellow-dark']};
	}

	& > span {
		font-family: 'Roboto', sans-serif;
		font-size: 1.25rem;
		line-height: 130%;
		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const OrderSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	gap: 2rem;
	margin-top: 2.5rem;
	background: linear-gradient(white, white) padding-box,
		linear-gradient(to right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1))
			border-box;
	border: 1px solid transparent;
	border-radius: 6px 36px 6px 36px;

	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	line-height: 130%;

	color: ${(props) => props.theme['base-text']};
`
const SummaryItemBase = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	& > div {
		display: flex;
		flex-direction: column;
	}
`
export const DeliveryAddress = styled(SummaryItemBase)``
export const DeliveryEstimate = styled(SummaryItemBase)``
export const PaymentMethod = styled(SummaryItemBase)``

export const MapPinIcon = styled(MapPin)`
	color: ${(props) => props.theme.white};

	background: ${(props) => props.theme.purple};
	padding: 0.5rem;
	border-radius: 9999px;
`
export const TimerIcon = styled(Timer)`
	color: ${(props) => props.theme.white};
	background: ${(props) => props.theme['yellow']};
	padding: 0.5rem;
	border-radius: 9999px;
`
export const CurrencyDollarIcon = styled(CurrencyDollar)`
	color: ${(props) => props.theme.white};
	background: ${(props) => props.theme['yellow-dark']};
	padding: 0.5rem;
	border-radius: 9999px;
`
