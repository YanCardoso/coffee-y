import coffee from '../../assets/Type_Americano.png'
import { CounterButton } from '../CounterButton'
import { RemoveButton } from '../RemoveButton'
import {
	ButtonsGroup,
	CartProductItemContainer,
	Divider,
	HeaderDetails,
	ProductDetailsBox,
} from './styles'

export function CartProductItem() {
	return (
		<>
			<CartProductItemContainer>
				<img
					src={coffee}
					alt='coffee'
				/>
				<ProductDetailsBox>
					<HeaderDetails>
						<span>Expresso Tradicional</span>
						<span>R$ 54,77</span>
					</HeaderDetails>
					<ButtonsGroup>
						<CounterButton />
						<RemoveButton />
					</ButtonsGroup>
				</ProductDetailsBox>
			</CartProductItemContainer>
			<Divider />
		</>
	)
}
