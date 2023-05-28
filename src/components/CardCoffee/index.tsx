import { CartButton } from '../CartButton'
import { CounterButton } from '../CountButton'
import { LabelCoffee } from '../LabelCoffee'
import { ActionButtons, BuyContainer, CardContainer, LabelBoxContainer } from './styles'

interface CardCoffeeProps {
	id?: string
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
				{label[1] && <LabelCoffee text={label[1]} /> }
				{label[2] && <LabelCoffee text={label[2]} /> }
			</LabelBoxContainer>
			<h2>{name}</h2>
			<span>{description}</span>

			<BuyContainer>
				<label>
					<span>R$</span> {price}
				</label>
				<ActionButtons>
					<CounterButton />
					<CartButton variant='purple' />
				</ActionButtons>
			</BuyContainer>
		</CardContainer>
	)
}
