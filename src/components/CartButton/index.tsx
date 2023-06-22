import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CartContainer, StyledBadge, VariantColors } from './styles'

interface CartContainer {
	variant: VariantColors
}

export function CartButton({ variant }: CartContainer) {
	const { updateTotal, cartItens } = useContext(ShoppingCartContext)
	const navigate = useNavigate()
	const goCheckout = () => {
		if (cartItens.length !== 0) {
			navigate('/checkout')
		} else {
			toast.error('Nenhum item adicionado ao carrinho')
		}
	}

	{
		if (variant === 'gold' && updateTotal().itensTotal > 0) {
			return (
				<StyledBadge badgeContent={updateTotal().itensTotal}>
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
