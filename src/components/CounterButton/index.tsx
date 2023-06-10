import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CounterContainer } from './styles'

interface CounterButtonProps {
	id: string
}

export function CounterButton({ id }: CounterButtonProps) {
	const { addItemToCart } = useContext(ShoppingCartContext)

	return (
		<CounterContainer>
			<button>
				<Minus size={14} />
			</button>
			<span>0</span>
			<button>
				<Plus
					size={14}
					onClick={() => addItemToCart(id)}
				/>
			</button>
		</CounterContainer>
	)
}
