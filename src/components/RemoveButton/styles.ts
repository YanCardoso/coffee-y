import styled from 'styled-components'

export const RemoveButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme['base-button']};
	color: ${(props) => props.theme['base-text']};
	font-family: 'Roboto', sans-serif;
	font-size: 0.75rem;
	padding: 0 0.75rem;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

	& > svg {
		color: ${(props) => props.theme.purple};
	}
`
