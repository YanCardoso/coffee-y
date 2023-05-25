import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, MaxWidth } from './styles'

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<MaxWidth>
				<Header />
				<Outlet />
			</MaxWidth>
		</LayoutContainer>
	)
}
