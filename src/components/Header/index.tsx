import { MapPin } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import CoffeeLogo from '../../assets/Logo.png'
import { CartButton } from '../CartButton'
import { HeaderContainer } from './styles'

export function Header() {
	const navigate = useNavigate()
	const goHome = () => navigate('/')

	return (
		<HeaderContainer>
			<img
				src={CoffeeLogo}
				alt='Coffee'
				onClick={goHome}
			/>
			<nav>
				<a href=''>
					<MapPin
						size={24}
						weight='fill'
					/>
					Belém, PA
				</a>
				<CartButton variant='gold' />
			</nav>
		</HeaderContainer>
	)
}
