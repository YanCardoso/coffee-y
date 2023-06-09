import deliveryImg from '../../assets/Illustration.png'
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

export function Success() {
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
							<span>Entrega em Rua João Daniel Martinelli, 102</span>
							<span>Farrapos - Porto Alegre, RS</span>
						</div>
					</DeliveryAddress>
					<DeliveryEstimate>
						<TimerIcon
							size={32}
							weight='fill'
						/>
						<div>
							<span>Previsão de entrega</span>
							<span>20 min - 30 min </span>
						</div>
					</DeliveryEstimate>
					<PaymentMethod>
						<CurrencyDollarIcon
							size={32}
							weight='fill'
						/>
						<div>
							<span>Pagamento na entrega</span>
							<span>Cartão de Crédito</span>
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
