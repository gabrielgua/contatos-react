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
  position: relative;
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

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

type ContactInputProps = {
  disabled?: boolean
  height?: number
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

export const ContactNameTextarea = styled.textarea<ContactInputProps>`
  color: ${vars.clrTextPrimary};
  width: 100%;
  font-weight: bold;
  resize: none;
  font-size: 18px;
  overflow: hidden;
  height: ${(props) => props.height + 'px'};
  scroll-behavior: auto;
  border: none;
  background-color: transparent;

  border-bottom: ${(props) =>
    props.disabled ? '' : `1px solid ${vars.clrTextPrimary}`};
`

export const ContactActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: auto;

  button {
    width: 100%;
  }
`
