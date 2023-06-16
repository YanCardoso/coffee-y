import styled from 'styled-components'

export const CounterContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme['base-button']};
	gap: 0.25rem;
	height: inherit;
	border-radius: 6px;
	width: 4.5rem;
	padding: 0.5rem;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;

    &:hover {
      background: none;
    }
	}

	& svg {
		color: ${(props) => props.theme.purple};
		cursor: pointer;

		&:hover {
			color: ${(props) => props.theme['purple-dark']};
		}
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
	}
`
