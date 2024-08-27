import styled from 'styled-components'
import vars from '../../styles/vars'

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 4rem;
`

export const HeaderTitle = styled.h1`
  color: ${vars.clrTextPrimary};
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const HeaderLink = styled.a`
  color: ${vars.clrPrimary};
`

export default HeaderWrapper
