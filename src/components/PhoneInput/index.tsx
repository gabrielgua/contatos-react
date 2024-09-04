import { ChangeEvent } from 'react'
import InputMask from 'react-input-mask'
import { Input } from '../../styles'

type PhoneInputProps = {
  mask: string
  value?: string
  placeholder: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputMaskComponent = ({
  mask,
  value,
  onChange,
  placeholder
}: PhoneInputProps) => (
  <InputMask
    mask={mask}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  >
    <Input required></Input>
  </InputMask>
)

export default InputMaskComponent
