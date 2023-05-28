import { LabelContainer } from './styles'

interface LabelCoffeeProps {
	text: string
}

export function LabelCoffee({ text }: LabelCoffeeProps) {
	return <LabelContainer>{text}</LabelContainer>
}
