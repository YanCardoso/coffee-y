import styled from "styled-components";

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  height: 2.5rem;
  width: 2.5rem;

  background: ${props => props.theme["yellow-light"]};
  border: none;

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }
`