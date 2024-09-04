import { useDispatch, useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import { Button, Input } from '../../styles'
import ContactsHeader, { ContactsList } from './styles'
import { Contact as ContactType } from '../../types/contact'
import LinkButton from '../../components/LinkButton'

const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootReducer) => state.contacts.items)
  const term = useSelector((state: RootReducer) => state.filter.term)

  const filteredContacts = () => {
    const sorted = [...contacts]
    if (!term.length) {
      return sorted
    }

    return sorted.filter(
      (contact) =>
        contact.fullName.toLowerCase().search(term) >= 0 ||
        contact.email.toLowerCase().search(term) >= 0
    )
  }

  const sort = (array: ContactType[]) => {
    return array.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() + new Date(b.createdAt).getTime()
    )
  }

  return (
    <>
      <ContactsHeader>
        <LinkButton to="/new" text="Adicionar +" />
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
