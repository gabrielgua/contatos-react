import { isSameHour } from 'date-fns'

export type Contact = {
  id: number
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
}

export const isNew = (contact: Contact) => {
  return isSameHour(contact.createdAt, new Date())
}
