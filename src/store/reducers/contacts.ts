import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../types/contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      fullName: 'Francisca Isis Brito',
      email: 'francisca.isis.brito@dkcarmo.com',
      phoneNumber: '(68) 986921506',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      fullName: 'Lara Louise Fogaça',
      email: 'eduardo_lopes@gmail.com.br',
      phoneNumber: '(86) 998384145',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      fullName: 'Eduardo Danilo Martin Lopes',
      email: 'lara_louise_fogaca@sabesp.com.br',
      phoneNumber: '(96) 986609966',
      createdAt: new Date().toISOString()
    },
    {
      id: 4,
      fullName: 'Patrícia Bianca Juliana',
      email: 'patricia_bianca_almada@accent.com.br',
      phoneNumber: '(61) 992792224',
      createdAt: new Date().toISOString()
    },
    {
      id: 5,
      fullName: 'Pedro Guilherme Moreira',
      email: 'pedro-moreira95@libbero.com.br',
      phoneNumber: '(68) 986181749',
      createdAt: new Date().toISOString()
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<Contact>) => {
      const contact = action.payload
      const index = state.items.findIndex((c) => c.id === contact.id)

      if (index >= 0) {
        state.items[index].email = contact.email
        state.items[index].phoneNumber = contact.phoneNumber
        state.items[index].fullName = contact.fullName
        alert('Informações atualizadas com sucesso!')
        return
      }

      contact.id = state.items.length <= 0 ? 1 : state.items.length + 1

      state.items = [...state.items, contact]
    },
    remove: (state, action: PayloadAction<number>) => {
      const contactId = action.payload
      state.items = [
        ...state.items.filter((contact) => contact.id !== contactId)
      ]
    }
  }
})

export const { save, remove } = contactSlice.actions
export default contactSlice.reducer
