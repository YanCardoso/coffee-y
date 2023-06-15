import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { RemoveButtonContainer } from './styles'

interface RemoveButtonProps {
	id: string
}

export function RemoveButton({ id }: RemoveButtonProps) {
	const { removeItemToCart } = useContext(ShoppingCartContext)

	return (
		<RemoveButtonContainer
			type='button'
			onClick={() => removeItemToCart(id)}
		>
			<Trash size={16} />
			Remover
		</RemoveButtonContainer>
	)
}
