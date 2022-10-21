import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <Transactions />
        <GlobalStyles />
      </ThemeProvider>
    </TransactionsProvider>
  )
}
