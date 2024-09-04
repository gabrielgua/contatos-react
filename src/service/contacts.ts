import { Contact } from '../types/contact'

export const validate = (contact: Contact, contacts: Contact[]) => {
  return (
    isEmailAvailable(contact, contacts) && isPhoneAvailable(contact, contacts)
  )
}

const isEmailAvailable = (contact: Contact, contacts: Contact[]): boolean => {
  const emailIndex = contacts.findIndex((c) => c.email === contact.email)
  if (emailIndex >= 0) {
    return contacts[emailIndex].id === contact.id
  }

  return true
}

const isPhoneAvailable = (contact: Contact, contacts: Contact[]): boolean => {
  const phoneIndex = contacts.findIndex(
    (c) => c.phoneNumber === contact.phoneNumber
  )
  if (phoneIndex >= 0) {
    return contacts[phoneIndex].id === contact.id
  }

  return true
}
