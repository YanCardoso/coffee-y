import { MapPinLine } from 'phosphor-react'
import {
	BoxCart,
	BoxForm,
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
	PostalCodeInput,
	StateInput,
	StreetInput
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
							<ComplementInput placeholder='Complemento' />
							<NeighborhoodInput placeholder='Bairro' />
							<CityInput placeholder='Cidade' />
							<StateInput placeholder='UF' />
						</FormBody>
					</CompleteOrderForm>
				</BoxForm>
				<BoxCart>
					<h2>Cafés selecionados</h2>
					<CheckoutCart></CheckoutCart>
				</BoxCart>
			</CheckoutContainer>
		</form>
	)
}
