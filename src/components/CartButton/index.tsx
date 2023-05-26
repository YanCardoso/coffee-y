import { ShoppingCartSimple } from 'phosphor-react'
import { CartContainer, VariantColors } from './styles'

interface CartContainer {
	variant: VariantColors
}

export function CartButton({ variant }: CartContainer) {
	return (
		<CartContainer variant={variant}>
			<ShoppingCartSimple
				weight='fill'
				size={22}
			/>
		</CartContainer>
	)
}
