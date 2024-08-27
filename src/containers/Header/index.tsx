import HeaderWrapper, { HeaderLink, HeaderLinks, HeaderTitle } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Agenda <br />
        Contatos
      </HeaderTitle>
      <HeaderLinks>
        <HeaderLink href="https://github.com/gabrielgua" target="_blank">
          Github
        </HeaderLink>
        <HeaderLink
          href="https://linkedin.com/in/gabriel-dev-backend"
          target="_blank"
        >
          Linkedin
        </HeaderLink>
        <HeaderLink
          href="https://github.com/gabrielgua/agenda-contatos-react"
          target="_blank"
        >
          Repositório do projeto
        </HeaderLink>
      </HeaderLinks>
    </HeaderWrapper>
  )
}

export default Header
