import { GlobalStyle } from './styles/global'
import AppRoutes from './routes'
import { Container } from './pages/Home/styles'
import { BrowserRouter } from 'react-router-dom'

export function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      < GlobalStyle />
    </BrowserRouter>
  )
}

