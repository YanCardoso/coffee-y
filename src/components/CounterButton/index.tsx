import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CounterContainer } from './styles'

interface CounterButtonProps {
	id: string
}

export function CounterButton({ id }: CounterButtonProps) {
	const { removeItemToCart, addItemToCart, cartItens } =
		useContext(ShoppingCartContext)

	const numberItems = cartItens.find((item) => item.id === id)

	return (
		<CounterContainer>
			<button onClick={() => removeItemToCart(id)}>
				<Minus size={14} />
			</button>
			<span>{numberItems ? numberItems.quantity : 0}</span>
			<button>
				<Plus
					size={14}
					onClick={() => addItemToCart(id)}
				/>
			</button>
		</CounterContainer>
	)
}
