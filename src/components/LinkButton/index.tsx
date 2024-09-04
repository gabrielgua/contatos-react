import { Link } from 'react-router-dom'
import { Button } from '../../styles'

type LinkButtonPros = {
  to: string
  text: string
}

const LinkButton = ({ to, text }: LinkButtonPros) => (
  <Link to={to}>
    <Button>{text}</Button>
  </Link>
)

export default LinkButton
