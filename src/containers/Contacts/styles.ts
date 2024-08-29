import styled from 'styled-components'

const ContactsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ContactsList = styled.div`
  margin-block: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`

export default ContactsHeader
