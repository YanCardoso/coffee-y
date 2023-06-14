import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CartContainer, StyledBadge, VariantColors } from './styles'

interface CartContainer {
	variant: VariantColors
}

export function CartButton({ variant }: CartContainer) {
	const { updateTotal } = useContext(ShoppingCartContext)
	const navigate = useNavigate()
	const goCheckout = () => navigate('/checkout')

	{
		if (variant === 'gold') {
			return (
				<StyledBadge badgeContent={updateTotal()}>
					<CartContainer
						variant={variant}
						onClick={goCheckout}
					>
						<ShoppingCartSimple
							weight='fill'
							size={22}
						/>
					</CartContainer>
				</StyledBadge>
			)
		} else {
			return (
				<CartContainer
					variant={variant}
					onClick={goCheckout}
				>
					<ShoppingCartSimple
						weight='fill'
						size={22}
					/>
				</CartContainer>
			)
		}
	}
}
