import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import styled from 'styled-components'

export const IntroContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-family: 'Roboto', sans-serif;
`
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 36.75rem;

	h1 {
		font-family: 'baloo 2', Helvetica, sans-serif;
		font-size: 3rem;
		font-weight: 800;
		line-height: 130%;
		color: ${(props) => props.theme['base-title']};
	}

	span {
		font-weight: 130%;
		font-size: 1.25rem;
		color: ${(props) => props.theme['base-text']};
	}
`

export const ItensContainer = styled.div`
	display: flex;
	max-width: 35.5rem;
	gap: 1.25rem;
	color: ${(props) => props.theme['base-text']};
	font-size: 1rem;
	font-weight: 130%;
`

const ListItemBase = styled.div`
	display: flex;
	gap: 0.75rem;
	flex-direction: column;

	div {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
`
export const ListItemOne = styled(ListItemBase)``
export const ListItemTwo = styled(ListItemBase)``

export const ShoppingCartIcon = styled(ShoppingCart)`
	color: ${(props) => props.theme.background};
	background: ${(props) => props.theme['yellow-dark']};
	padding: 0.5rem;
	border-radius: 9999px;
`

export const CoffeeIcon = styled(Coffee)`
	color: ${(props) => props.theme.background};
	background: ${(props) => props.theme['purple-dark']};
	padding: 0.5rem;
	border-radius: 9999px;
`
export const TimerIcon = styled(Timer)`
	color: ${(props) => props.theme.background};
	background: ${(props) => props.theme.yellow};
	padding: 0.5rem;
	border-radius: 9999px;
`

export const PackageIcon = styled(Package)`
	color: ${(props) => props.theme.background};
	background: ${(props) => props.theme['base-text']};
	padding: 0.5rem;
	border-radius: 9999px;
`

export const ListSection = styled.div`
	padding-top: 2rem;

	& > h2 {
		font-family: 'baloo 2', sans-serif;
		font-size: 2rem;
		font-weight: 800;
		line-height: 160%;
		color: ${(props) => props.theme['base-subtitle']};
		margin-bottom: 3.375rem;
	}
`
export const CardItensContainer = styled.div`
	display: flex;
	width: 100%;
	height: inherit;
	flex-wrap: wrap;
`
