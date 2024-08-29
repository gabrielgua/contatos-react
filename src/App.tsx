import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import GlobalStyles, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <RouterProvider router={routes}></RouterProvider>
      </Container>
    </Provider>
  )
}

export default App
