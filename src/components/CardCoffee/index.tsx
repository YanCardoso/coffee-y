import { CartButton } from '../CartButton'
import { CounterButton } from '../CounterButton'
import { LabelCoffee } from '../LabelCoffee'
import {
	ActionButtons,
	BuyContainer,
	CardContainer,
	LabelBoxContainer,
} from './styles'

interface CardCoffeeProps {
	id: string
	name: string
	description: string
	price: number
	coffeeImg: string
	label: string[]
}

export function CardCoffee({
	id,
	name,
	description,
	price,
	coffeeImg,
	label,
}: CardCoffeeProps) {
	return (
		<CardContainer>
			<img
				src={coffeeImg}
				alt='expresso'
			/>
			<LabelBoxContainer>
				<LabelCoffee text={label[0]} />
				{label[1] && <LabelCoffee text={label[1]} />}
				{label[2] && <LabelCoffee text={label[2]} />}
			</LabelBoxContainer>
			<h2>{name}</h2>
			<span>{description}</span>

			<BuyContainer>
				<label>
					<span>R$</span> {Intl.NumberFormat('pt-BR', {currency: 'BRL', minimumFractionDigits: 2}).format(price)}
				</label>
				<ActionButtons>
					<CounterButton id={id}/>
					<CartButton variant='purple' />
				</ActionButtons>
			</BuyContainer>
		</CardContainer>
	)
}
