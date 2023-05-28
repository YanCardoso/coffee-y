import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type VariantColors = 'purple' | 'gold'

interface CartContainerProps {
	variant: VariantColors
}

export const CartContainer = styled.button<CartContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	border: none;

	cursor: pointer;

	height: 2.5rem;
	width: 2.5rem;

	background: ${(props) =>
		props.variant === 'purple' && `${defaultTheme['purple-dark']}`};
	background: ${(props) =>
		props.variant === 'gold' && `${defaultTheme['yellow-light']}`};

	svg {
		color: ${(props) =>
			props.variant === 'purple' && `${defaultTheme.background}`};
		color: ${(props) =>
			props.variant === 'gold' && `${defaultTheme['yellow-dark']}`};
	}
`
