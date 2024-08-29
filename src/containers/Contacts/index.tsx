import { useState } from 'react'
import { Button, Input } from '../../styles'
import { Contact as ContactType } from '../../types/contact'
import ContactsHeader, { ContactsList } from './styles'
import Contact from '../../components/Contact'

const contacts: ContactType[] = [
  {
    id: 1,
    fullName: 'Francisca Isis Brito',
    email: 'francisca.isis.brito@dkcarmo.com',
    phoneNumber: '(68) 986921506',
    createdAt: new Date()
  },
  {
    id: 2,
    fullName: 'Lara Louise Fogaça',
    email: 'eduardo_lopes@gmail.com.br',
    phoneNumber: '(86) 998384145',
    createdAt: new Date()
  },
  {
    id: 3,
    fullName: 'Eduardo Danilo Martin Lopes',
    email: 'lara_louise_fogaca@sabesp.com.br',
    phoneNumber: '(96) 986609966',
    createdAt: new Date()
  },
  {
    id: 4,
    fullName: 'Patrícia Bianca Juliana Almada',
    email: 'patricia_bianca_almada@accent.com.br',
    phoneNumber: '(61) 992792224',
    createdAt: new Date()
  },
  {
    id: 5,
    fullName: 'Pedro Guilherme Moreira',
    email: 'pedro-moreira95@libbero.com.br',
    phoneNumber: '(68) 986181749',
    createdAt: new Date()
  }
]

const Contacts = () => {
  return (
    <>
      <ContactsHeader>
        <Button>Adicionar +</Button>
        <Input placeholder="Buscar contatos" />
      </ContactsHeader>
      <ContactsList>
        {contacts.map((contact) => (
          <Contact contact={contact} />
        ))}
      </ContactsList>
    </>
  )
}

export default Contacts
