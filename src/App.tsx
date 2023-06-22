import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import {
	ShoppingCartContext,
	ShoppingCartContextProvider,
	ShoppingCartContextType,
} from './contexts/ShoppingCartContext'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
	return (
		<ShoppingCartContext.Provider value={{} as ShoppingCartContextType}>
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<ShoppingCartContextProvider>
						<Router />
						<ToastContainer
							position='top-right'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme='light'
						/>
					</ShoppingCartContextProvider>
					<GlobalStyle />
				</ThemeProvider>
			</BrowserRouter>
		</ShoppingCartContext.Provider>
	)
}

export default App
