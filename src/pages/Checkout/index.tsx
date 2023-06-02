import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
	BoxCart,
	BoxForm,
	BoxPayment,
	CheckoutCart,
	CheckoutContainer,
	CityInput,
	ComplementInput,
	CompleteOrderForm,
	FormBody,
	FormHeader,
	HeaderTextBox,
	NeighborhoodInput,
	NumberInput,
	OptionalBox,
	PostalCodeInput,
	StateInput,
	StreetInput,
} from './styles'

export function Checkout() {
	return (
		<form action=''>
			<CheckoutContainer>
				<BoxForm>
					<h2>Complete seu pedido</h2>
					<CompleteOrderForm>
						<FormHeader>
							<MapPinLine size={22} />
							<HeaderTextBox>
								<h3>Endereço de Entrega</h3>
								<span>Informe o endereço onde deseja receber seu pedido</span>
							</HeaderTextBox>
						</FormHeader>
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
					<FormHeader>
							<CurrencyDollar size={22} />
							<HeaderTextBox>
								<h3>Pagamento</h3>
								<span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
							</HeaderTextBox>
						</FormHeader>
					</BoxPayment>
				</BoxForm>
				<BoxCart>
					<h2>Cafés selecionados</h2>
					<CheckoutCart>teste</CheckoutCart>
				</BoxCart>
			</CheckoutContainer>
		</form>
	)
}
