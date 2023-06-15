import { CounterButton } from '../CounterButton'
import { RemoveButton } from '../RemoveButton'
import {
	ButtonsGroup,
	CartProductItemContainer,
	Divider,
	HeaderDetails,
	ProductDetailsBox,
} from './styles'

interface CartProductItemProps {
	id: string
	name: string
	price: number
	coffeeImg: string
}

export function CartProductItem({
	id,
	name,
	price,
	coffeeImg,
}: CartProductItemProps) {
	return (
		<>
			<CartProductItemContainer>
				<img
					src={coffeeImg}
					alt='coffee'
				/>
				<ProductDetailsBox>
					<HeaderDetails>
						<span>{name}</span>
						<span>R$ {price}</span>
					</HeaderDetails>
					<ButtonsGroup>
						<CounterButton id={id} />
						<RemoveButton id={id} />
					</ButtonsGroup>
				</ProductDetailsBox>
			</CartProductItemContainer>
			<Divider />
		</>
	)
}
