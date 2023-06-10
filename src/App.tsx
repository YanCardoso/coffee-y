import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
	ShoppingCartContext,
	ShoppingCartContextProvider,
} from './contexts/ShoppingCartContext'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
function App() {
	return (
		<ShoppingCartContext.Provider value={{} as any}>
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<ShoppingCartContextProvider>
						<Router />
					</ShoppingCartContextProvider>
					<GlobalStyle />
				</ThemeProvider>
			</BrowserRouter>
		</ShoppingCartContext.Provider>
	)
}

export default App
