import { useContext } from 'react'
import coffee_img from '../../assets/coffee_img.png'
import { CardCoffee } from '../../components/CardCoffee'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
	CardItensContainer,
	CoffeeIcon,
	IntroContainer,
	ItensContainer,
	ListItemOne,
	ListItemTwo,
	ListSection,
	PackageIcon,
	ShoppingCartIcon,
	TextContainer,
	TimerIcon,
	TitleContainer,
} from './styles'
export function Home() {
	const { coffeeData } = useContext(ShoppingCartContext)

	return (
		<>
			<IntroContainer>
				<TextContainer>
					<TitleContainer>
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<span>
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</span>
					</TitleContainer>
					<ItensContainer>
						<ListItemOne>
							<div>
								<ShoppingCartIcon
									size={32}
									weight='fill'
								/>
								<span>Compra simples e segura</span>
							</div>
							<div>
								<TimerIcon
									size={32}
									weight='fill'
								/>
								<span>Entrega rápida e rastreada</span>
							</div>
						</ListItemOne>
						<ListItemTwo>
							<div>
								<PackageIcon
									size={32}
									weight='fill'
								/>
								<span>Embalagem mantém o café intacto</span>
							</div>
							<div>
								<CoffeeIcon
									size={32}
									weight='fill'
								/>
								<span>O café chega fresquinho até você</span>
							</div>
						</ListItemTwo>
					</ItensContainer>
				</TextContainer>
				<img
					src={coffee_img}
					alt='Xícara de café'
				/>
			</IntroContainer>
			<ListSection>
				<h2>Nossos Cafés</h2>
				<CardItensContainer>
					{coffeeData.map((item) => {
						return (
							<CardCoffee
								key={item.id}
								id={item.id}
								name={item.name}
								description={item.description}
								label={item.label}
								price={item.price}
								coffeeImg={item.coffeeImg}
							/>
						)
					})}
				</CardItensContainer>
			</ListSection>
		</>
	)
}
