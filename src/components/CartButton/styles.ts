import Badge, { badgeClasses } from '@mui/base/Badge'
import styled, { css } from 'styled-components'
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

export const StyledBadge = styled(Badge)(
	() => css`
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 14px;
		font-variant: tabular-nums;
		list-style: none;
		font-family: 'Roboto', sans-serif;
		position: relative;
		display: inline-block;
		line-height: 1;

		& .${badgeClasses.badge} {
			z-index: auto;
			position: absolute;
			top: 0;
			right: 0;
			min-width: 22px;
			height: 22px;
			padding: 0 6px;
			color: #fff;
			font-weight: 700;
			font-size: 0.75rem;
			line-height: 22px;
			white-space: nowrap;
			text-align: center;
			border-radius: 12px;
			background: ${(props) => props.theme['yellow-dark']};
			transform: translate(50%, -50%);
			transform-origin: 100% 0;
		}
	`
)
