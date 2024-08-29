import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { Button, Input } from '../../styles'
import ContactsHeader, { ContactsList } from './styles'

const Contacts = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  return (
    <>
      <ContactsHeader>
        <Button>Adicionar +</Button>
        <Input placeholder="Buscar contatos" />
      </ContactsHeader>
      <ContactsList>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ContactsList>
    </>
  )
}

export default Contacts
