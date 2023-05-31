import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/defaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/home'

export function Router() {
	return (
		<Routes>
			<Route
				path='/'
				element={<DefaultLayout />}
			>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/checkout'
					element={<Checkout />}
				/>
			</Route>
		</Routes>
	)
}
