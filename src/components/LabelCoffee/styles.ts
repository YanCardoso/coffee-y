import styled from 'styled-components'

export const LabelContainer = styled.div`
	background: ${(props) => props.theme['yellow-light']};
	color: ${(props) => props.theme['yellow-dark']};
	font-family: 'Roboto', sans-serif;
	font-size: 0.625rem;
	font-weight: 700;
	line-height: 130%;
	padding: 0.25rem 0.5rem;
	border-radius: 100px;
`
