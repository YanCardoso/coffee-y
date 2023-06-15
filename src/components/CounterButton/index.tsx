import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CounterContainer } from './styles'

interface CounterButtonProps {
	id: string
}

export function CounterButton({ id }: CounterButtonProps) {
	const { decrementQuantity, incrementQuantity, cartItens } =
		useContext(ShoppingCartContext)

	const numberItems = cartItens.find((item) => item.id === id)

	return (
		<CounterContainer>
			<button
				type='button'
				onClick={() => decrementQuantity(id)}
			>
				<Minus size={14} />
			</button>
			<span>{numberItems ? numberItems.quantity : 0}</span>
			<button
				type='button'
				onClick={() => incrementQuantity(id)}
			>
				<Plus size={14} />
			</button>
		</CounterContainer>
	)
}
