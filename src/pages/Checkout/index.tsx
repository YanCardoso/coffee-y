import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { CartProductItem } from '../../components/CartProductItem'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
	BoxCart,
	BoxForm,
	BoxPayment,
	ButtonGroupContainer,
	CheckoutCart,
	CheckoutContainer,
	CityInput,
	ComplementInput,
	CompleteOrderForm,
	DeliveryWrapper,
	FormBody,
	HeaderDeliveryAddressBox,
	HeaderPaymentBox,
	HeaderTextBox,
	NeighborhoodInput,
	NumberInput,
	OptionalBox,
	PostalCodeInput,
	StateInput,
	StreetInput,
	SubmitOrderButton,
	TotalItemsWrapper,
	TotalPriceContainer,
	TotalWrapper,
} from './styles'

export function Checkout() {
	const { cartItens, updateTotal } = useContext(ShoppingCartContext)

	return (
		<form action=''>
			<CheckoutContainer>
				<BoxForm>
					<h2>Complete seu pedido</h2>
					<CompleteOrderForm>
						<HeaderDeliveryAddressBox>
							<MapPinLine size={22} />
							<HeaderTextBox>
								<h3>Endereço de Entrega</h3>
								<span>Informe o endereço onde deseja receber seu pedido</span>
							</HeaderTextBox>
						</HeaderDeliveryAddressBox>
						<FormBody>
							<PostalCodeInput placeholder='CEP' />
							<StreetInput placeholder='Rua' />
							<NumberInput placeholder='Número' />
							<OptionalBox>
								<ComplementInput placeholder='Complemento' />
								<span>Opcional</span>
							</OptionalBox>
							<NeighborhoodInput placeholder='Bairro' />
							<CityInput placeholder='Cidade' />
							<StateInput placeholder='UF' />
						</FormBody>
					</CompleteOrderForm>
					<BoxPayment>
						<HeaderPaymentBox>
							<CurrencyDollar size={22} />
							<HeaderTextBox>
								<h3>Pagamento</h3>
								<span>
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</span>
							</HeaderTextBox>
						</HeaderPaymentBox>
						<ButtonGroupContainer>
							<button>
								<CreditCard size={16} />
								CARTÃO DE CRÉDITO
							</button>
							<button>
								<Bank size={16} />
								CARTÃO DE DEBITO
							</button>
							<button>
								<Money size={16} />
								DINHEIRO
							</button>
						</ButtonGroupContainer>
					</BoxPayment>
				</BoxForm>
				<BoxCart>
					<h2>Cafés selecionados</h2>
					<CheckoutCart>
						{cartItens.map((item) => {
							return (
								<CartProductItem
									key={item.id}
									{...item}
								/>
							)
						})}

						<TotalPriceContainer>
							<TotalItemsWrapper>
								<span>Total de itens</span>
								<span>R$ {updateTotal().priceTotal}</span>
							</TotalItemsWrapper>
							<DeliveryWrapper>
								<span>Entrega</span>
								<span>R$ {updateTotal().deliveryCost}</span>
							</DeliveryWrapper>
							<TotalWrapper>
								<span>Total</span>
								<span>
									R$ {updateTotal().priceTotal + updateTotal().deliveryCost}
								</span>
							</TotalWrapper>
						</TotalPriceContainer>
						<SubmitOrderButton type='submit'>
							CONFIRMAR PEDIDO
						</SubmitOrderButton>
					</CheckoutCart>
				</BoxCart>
			</CheckoutContainer>
		</form>
	)
}
