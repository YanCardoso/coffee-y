import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function CounterButton() {
	return (
		<CounterContainer>
			<button>
				<Minus size={14} />
			</button>
			<span>7</span>
			<button>
				<Plus size={14} />
			</button>
		</CounterContainer>
	)
}
