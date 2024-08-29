import { useState } from 'react'
import {
  ContactActions,
  ContactAvatar,
  ContactCard,
  ContactHeader,
  ContactInfo,
  ContactInput,
  ContactNewBadge,
  ContactTitle
} from './styles'
import { Button } from '../../styles'
import { Contact as ContactType, isNew } from '../../types/contact'

type ContactProps = {
  contact: ContactType
}

const Contact = ({ contact }: ContactProps) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <ContactCard key={contact.id}>
      <ContactHeader>
        <ContactAvatar>#{contact.id}</ContactAvatar>
        <ContactTitle>{contact.fullName}</ContactTitle>
        {isNew(contact) && (
          <ContactNewBadge title="Contato adicionado recentemente.">
            Novo
          </ContactNewBadge>
        )}
      </ContactHeader>
      <ContactInfo>
        <ContactInput
          value={contact.email}
          placeholder="E-mail"
          disabled={!isEditing}
        />
        <ContactInput
          value={contact.phoneNumber}
          placeholder="Telefone"
          disabled={!isEditing}
        />
      </ContactInfo>
      <ContactActions>
        <Button secondary onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Salvar' : 'Editar'}
        </Button>
        <Button danger>Remover</Button>
      </ContactActions>
    </ContactCard>
  )
}

export default Contact
