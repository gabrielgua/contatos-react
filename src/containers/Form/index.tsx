import { FormEvent, useState } from 'react'
import LinkButton from '../../components/LinkButton'
import InputMaskComponent from '../../components/PhoneInput'
import { Button, Input } from '../../styles'
import { FormWrapper, FormHeader } from './styles'
import { Contact } from '../../types/contact'
import { useDispatch, useSelector } from 'react-redux'
import { save } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'
import { validate } from '../../service/contacts'
import { RootReducer } from '../../store'

const Form = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const contact: Contact = {
      id: 0,
      email,
      fullName,
      phoneNumber
    }

    if (validate(contact, contacts)) {
      dispatch(save(contact))
      navigate('/')
      return
    }

    alert('E-mail ou telefone celular já cadastrados!')
    setEmail('')
    setPhoneNumber('')
  }

  return (
    <>
      <FormHeader>
        <LinkButton to="/" text="Voltar" />
        <h2>Novo contato</h2>
      </FormHeader>
      <FormWrapper onSubmit={onSubmit}>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          placeholder="Nome Completo"
          type="text"
          required
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-mail"
          type="email"
          required
        />
        <InputMaskComponent
          value={phoneNumber}
          onChange={({ target }) => setPhoneNumber(target.value)}
          mask="(99) 99999-9999"
          placeholder="Telefone celular"
        />
        <Button type="submit">Adicionar +</Button>
      </FormWrapper>
    </>
  )
}

export default Form
