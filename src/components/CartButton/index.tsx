import { ShoppingCartSimple } from 'phosphor-react'
import { CartContainer } from './styles'

export function CartButton() {
	return (
		<CartContainer>
			<ShoppingCartSimple weight='fill' size={22}/>
		</CartContainer>
	)
}
