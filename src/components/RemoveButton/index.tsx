import { Trash } from 'phosphor-react'
import { RemoveButtonContainer } from './styles'

export function RemoveButton() {
	return (
		<RemoveButtonContainer>
			<Trash size={16} />
			Remover
		</RemoveButtonContainer>
	)
}
