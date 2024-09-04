import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove, save } from '../../store/reducers/contacts'
import { Button } from '../../styles'
import { Contact as ContactType } from '../../types/contact'
import {
  ContactActions,
  ContactAvatar,
  ContactCard,
  ContactHeader,
  ContactInfo,
  ContactInput,
  ContactNameTextarea
} from './styles'

type ContactProps = {
  contact: ContactType
}

const Contact = ({ contact }: ContactProps) => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [email, setEmail] = useState(contact.email)
  const [fullName, setFullName] = useState(contact.fullName)
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber)

  const [textareaHeight, setTextareaHeight] = useState(0)
  const textarea = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setTextareaHeight(textarea.current?.scrollHeight!)
  })

  const canEdit = (contact: ContactType) => {
    return isEmailAvailable(contact) && isPhoneAvailable(contact)
  }

  const isEmailAvailable = (contact: ContactType): boolean => {
    const emailIndex = contacts.findIndex((c) => c.email === contact.email)
    if (emailIndex >= 0) {
      return contacts[emailIndex].id === contact.id
    }

    return true
  }

  const isPhoneAvailable = (contact: ContactType): boolean => {
    const phoneIndex = contacts.findIndex(
      (c) => c.phoneNumber === contact.phoneNumber
    )
    if (phoneIndex >= 0) {
      return contacts[phoneIndex].id === contact.id
    }

    return true
  }

  const editContact = () => {
    const editedContact: ContactType = {
      ...contact,
      fullName,
      email,
      phoneNumber
    }

    if (!canEdit(editedContact)) {
      resetContactFields()
      alert('E-mail ou telefone já cadastrados!')
      return
    }

    dispatch(save(editedContact))
    setIsEditing(false)
  }

  const cancelEdit = () => {
    resetContactFields()

    //trick to fullName area have time to ajust its size before setting the editing state to false
    setTimeout(() => {
      setIsEditing(false)
    }, 100)
  }

  const removeContact = (id: number) => {
    dispatch(remove(id))
  }

  const resetContactFields = () => {
    setEmail(contact.email)
    setFullName(contact.fullName)
    setPhoneNumber(contact.phoneNumber)
  }

  const autoGrow = () => {
    setTextareaHeight(textarea.current?.scrollHeight!)
  }

  return (
    <ContactCard key={contact.id}>
      <ContactHeader>
        <ContactAvatar>#{contact.id}</ContactAvatar>
        <ContactNameTextarea
          ref={textarea}
          onInput={autoGrow}
          height={textareaHeight}
          value={fullName}
          disabled={!isEditing}
          title={contact.fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </ContactHeader>
      <ContactInfo>
        <ContactInput
          value={email}
          placeholder="E-mail"
          disabled={!isEditing}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContactInput
          value={phoneNumber}
          placeholder="Telefone"
          disabled={!isEditing}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </ContactInfo>
      <ContactActions>
        {isEditing ? (
          <>
            <Button $secondary onClick={editContact}>
              Salvar
            </Button>
            <Button $danger onClick={cancelEdit}>
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Button $secondary onClick={() => setIsEditing(!isEditing)}>
              Editar
            </Button>
            <Button $danger onClick={() => removeContact(contact.id)}>
              Remover
            </Button>
          </>
        )}
      </ContactActions>
    </ContactCard>
  )
}

export default Contact
