import { useDispatch, useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { Button, Input } from '../../styles'
import ContactsHeader, { ContactsList } from './styles'
import { useState } from 'react'
import { changeTerm } from '../../store/reducers/filter'

const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootReducer) => state.contacts.items)
  const term = useSelector((state: RootReducer) => state.filter.term)

  const filteredContacts = () => {
    if (!term.length) {
      return contacts
    }

    return contacts.filter(
      (contact) =>
        contact.fullName.toLowerCase().search(term) >= 0 ||
        contact.email.toLowerCase().search(term) >= 0
    )
  }

  return (
    <>
      <ContactsHeader>
        <Button>Adicionar +</Button>
        <Input
          placeholder="Buscar contatos"
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
      </ContactsHeader>
      <ContactsList>
        {filteredContacts().map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ContactsList>
    </>
  )
}

export default Contacts
