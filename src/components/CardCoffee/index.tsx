import expresso from '../../assets/Type=Expresso.png'
import { CartButton } from '../CartButton'
import { CounterButton } from '../CountButton'
import { LabelCoffee } from '../LabelCoffee'
import { ActionButtons, BuyContainer, CardContainer } from './styles'
export function CardCoffee() {
	return (
		<CardContainer>
			<img
				src={expresso}
				alt='expresso'
			/>

			<LabelCoffee />
			<h2>Expresso Tradicional</h2>
			<span>O tradicional café feito com água quente e grãos moídos</span>

			<BuyContainer>
				<label>
					<span>R$</span> 9,90
				</label>
				<ActionButtons>
					<CounterButton />
					<CartButton variant='purple'/>
				</ActionButtons>
			</BuyContainer>
		</CardContainer>
	)
}
