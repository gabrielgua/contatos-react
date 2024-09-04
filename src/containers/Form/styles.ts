import styled from 'styled-components'
import vars from '../../styles/vars'

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;

  h2 {
    color: ${vars.clrTextPrimary};
  }
`

export const FormWrapper = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
