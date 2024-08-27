import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import GlobalStyles, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <RouterProvider router={routes}></RouterProvider>
      </Container>
    </>
  )
}

export default App
