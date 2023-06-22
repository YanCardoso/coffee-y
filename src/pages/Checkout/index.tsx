import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartProductItem } from '../../components/CartProductItem'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { intlBRL } from '../../utils/intl'
import {
	BoxCart,
	BoxForm,
	BoxPayment,
	ButtonGroupContainer,
	ButtonPayment,
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

type PaymentType = 'creditPayment' | 'debitPayment' | 'cashPayment'

interface FormValues {
	city: string
	complement?: string
	neighborhood: string
	number: string
	paymentMethod: string
	postalCode: string
	state: string
	street: string
}

export function Checkout() {
	const { register, handleSubmit, watch, reset, setValue } =
		useForm<FormValues>()
	const { cartItens, updateTotal, finalizeOrder } =
		useContext(ShoppingCartContext)
	const [paymentType, setPaymentType] = useState('')
	const navigate = useNavigate()
	const isOptionalVisible = watch('complement') !== ''
	const goToSuccessPage = () => navigate('/success')

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		finalizeOrder(data)
		reset()
		goToSuccessPage()
	}

	const handlePaymentSelection = (paymentMethod: PaymentType) => {
		setValue('paymentMethod', paymentMethod)
		setPaymentType(paymentMethod)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
							<PostalCodeInput
								placeholder='CEP'
								{...register('postalCode')}
							/>
							<StreetInput
								placeholder='Rua'
								{...register('street')}
							/>
							<NumberInput
								placeholder='Número'
								{...register('number')}
							/>
							<OptionalBox>
								<ComplementInput
									placeholder='Complemento'
									{...register('complement')}
								/>
								{!isOptionalVisible && <span>Opcional</span>}
							</OptionalBox>
							<NeighborhoodInput
								placeholder='Bairro'
								{...register('neighborhood')}
							/>
							<CityInput
								placeholder='Cidade'
								{...register('city')}
							/>
							<StateInput
								placeholder='UF'
								{...register('state')}
							/>
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
							<ButtonPayment
								type='button'
								onClick={() => handlePaymentSelection('creditPayment')}
								borderEnabled={paymentType === 'creditPayment' ? true : false}
							>
								<CreditCard size={16} />
								CARTÃO DE CRÉDITO
							</ButtonPayment>
							<ButtonPayment
								type='button'
								onClick={() => handlePaymentSelection('debitPayment')}
								borderEnabled={paymentType === 'debitPayment' ? true : false}
							>
								<Bank size={16} />
								CARTÃO DE DEBITO
							</ButtonPayment>
							<ButtonPayment
								type='button'
								onClick={() => handlePaymentSelection('cashPayment')}
								borderEnabled={paymentType === 'cashPayment' ? true : false}
							>
								<Money size={16} />
								DINHEIRO
							</ButtonPayment>
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
								<span>{intlBRL.format(updateTotal().priceTotal)}</span>
							</TotalItemsWrapper>
							<DeliveryWrapper>
								<span>Entrega</span>
								<span>{intlBRL.format(updateTotal().deliveryCost)}</span>
							</DeliveryWrapper>
							<TotalWrapper>
								<span>Total</span>
								<span>
									{intlBRL.format(
										updateTotal().priceTotal + updateTotal().deliveryCost
									)}
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
