import styled from 'styled-components'
import vars from '../../styles/vars'

export const ContactCard = styled.div`
  padding: 1rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  border: 1px solid rgba(${vars.clrSecondaryRGB}, 0.5);
  border-radius: 1.5rem;
  gap: 1rem;
`
export const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

export const ContactAvatar = styled.span`
  background-color: ${vars.clrSecondary};
  color: ${vars.clrTextPrimary};
  border-radius: 50%;
  font-weight: bold;
  min-width: 40px;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
`

export const ContactTitle = styled.h4`
  color: ${vars.clrTextPrimary};
`

export const ContactNewBadge = styled.p`
  margin-left: auto;
  font-family: 'Roboto', monospace;
  background-color: ${vars.clrTextPrimary};
  padding: 0.125rem 0.5rem;
  font-weight: bold;
  font-size: 12px;
  border-radius: 1rem;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

type ContactInputProps = {
  disabled?: boolean
}

export const ContactInput = styled.input<ContactInputProps>`
  font-size: 13px;
  color: ${vars.clrTextPrimary};
  background-color: transparent;
  border: none;

  border-bottom: ${(props) =>
    props.disabled ? '' : `1px solid ${vars.clrTextPrimary}`};
  padding: 0.25rem 0rem;
`

export const ContactActions = styled.div`
  display: flex;
  align-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: auto;

  button {
    flex-grow: 1;
  }
`
