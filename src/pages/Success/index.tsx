import { useContext } from 'react'
import deliveryImg from '../../assets/Illustration.png'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
	CurrencyDollarIcon,
	DeliveryAddress,
	DeliveryEstimate,
	MapPinIcon,
	OrderSummaryContainer,
	PaymentMethod,
	SuccessContainer,
	SummaryBox,
	TimerIcon,
} from './styles'

type payment = {
	[key: string]: string
}

export function Success() {
	const { orderConfirmed } = useContext(ShoppingCartContext)

	const paymentType: payment = {
		creditPayment: 'Cartã de Credito',
		debitPayment: 'Cartão de Debito',
		cashPayment: 'Dinheiro',
	}

	return (
		<SuccessContainer>
			<SummaryBox>
				<h1>Uhu! Pedido confirmado</h1>
				<span>Agora é só aguardar que logo o café chegará até você</span>
				<OrderSummaryContainer>
					<DeliveryAddress>
						<MapPinIcon
							size={32}
							weight='fill'
						/>
						<div>
							<span>
								Entrega em
								<strong>
									{` ` + orderConfirmed.street + `, ` + orderConfirmed.number}
								</strong>
							</span>
							<span>
								{orderConfirmed.neighborhood +
									` - ` +
									orderConfirmed.city +
									`, ` +
									orderConfirmed.state}
							</span>
						</div>
					</DeliveryAddress>
					<DeliveryEstimate>
						<TimerIcon
							size={32}
							weight='fill'
						/>
						<div>
							<span>Previsão de entrega</span>
							<span>
								<strong>20 min - 30 min </strong>
							</span>
						</div>
					</DeliveryEstimate>
					<PaymentMethod>
						<CurrencyDollarIcon
							size={32}
							weight='fill'
						/>
						<div>
							<span>Pagamento na entrega</span>
							<span>
								<strong>{paymentType[orderConfirmed.paymentMethod]}</strong>
							</span>
						</div>
					</PaymentMethod>
				</OrderSummaryContainer>
			</SummaryBox>
			<img
				src={deliveryImg}
				alt='delivery'
			/>
		</SuccessContainer>
	)
}
