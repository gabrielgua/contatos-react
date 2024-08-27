import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: black;
    background-color: ${vars.clrBg};
  }
`

export const Container = styled.div`
  width: min(1000px, 100% - 4rem);
  margin-inline: auto;
  color: black;
`

type ButtonProps = {
  secondary?: boolean
  danger?: boolean
}

export const Button = styled.button<ButtonProps>`
  --clr: ${(props) => {
    if (props.secondary) return vars.clrTextPrimary
    else if (props.danger) return vars.clrDanger
    return vars.clrPrimary
  }};
  --clrRGB: ${(props) => {
    if (props.secondary) return vars.clrTextPrimaryRGB
    else if (props.danger) return vars.clrDangerRGB

    return vars.clrPrimaryRGB
  }};
  --clrText: ${(props) => (props.secondary ? 'black' : vars.clrTextPrimary)};
  width: max-content;
  border: none;
  padding: 0.75rem 1rem;
  color: var(--clrText);
  font-weight: bold;
  font-size: 14px;
  border-radius: 1rem;
  background-color: var(--clr);
  cursor: pointer;

  outline-width: 0;
  outline-offset: -1px;
  outline-style: solid;
  outline-color: transparent;
  transition: all 50ms ease;

  &:hover,
  &:focus {
    outline-color: var(--clr);
    outline-offset: 2px;
    outline-width: 2px;
  }

  &:active {
    outline-width: 2px;
    background-color: rgba(var(--clrRGB), 0.5);
  }
`

export const Input = styled.input`
  --clrBg: ${vars.clrTextPrimary};
  flex-grow: 1;
  padding: 0.75rem;
  border-radius: 1rem;
  border: none;

  background-color: var(--clrBg);
  color: ${vars.clrSecondary};
  font-weight: bold;

  outline-width: 0;
  outline-offset: -1px;
  outline-style: solid;
  outline-color: transparent;
  transition: all 50ms ease;

  &:hover {
    outline-color: var(--clrBg);
    outline-width: 3px;
  }

  &:focus {
    outline-color: var(--clrBg);
    outline-offset: 2px;
    outline-width: 2px;
  }
`

export default GlobalStyles
