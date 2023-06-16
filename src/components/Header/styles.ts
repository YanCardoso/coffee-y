import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  margin-bottom: 2rem;
  height: 2.5rem;

  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    height: inherit;

    a:first-child {
      display: flex;
      border-radius: 6px;
      padding: 0.5rem;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme["purple-light"]};
      gap: 0.25rem;
      max-width: 8.75rem;
      height: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 130%;
      font-size: 0.875rem;
    }
  }
`