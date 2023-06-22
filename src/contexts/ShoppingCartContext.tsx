import { ReactNode, createContext, useState } from 'react'
import voca from 'voca'
import { coffeesItens } from '../utils/coffeeItens'

interface CoffeeData {
	id: string
	name: string
	description: string
	price: number
	coffeeImg: string
	label: string[]
}

type ShoppingCartItem = {
	id: string
	name: string
	price: number
	coffeeImg: string
	quantity: number
}

interface ShoppingCartContextProps {
	children: ReactNode
}

export type ShoppingCartContextType = {
	cartItens: ShoppingCartItem[]
	coffeeData: CoffeeData[]
	orderConfirmed: FormValues
	incrementQuantity: (id: string) => void
	decrementQuantity: (id: string) => void
	removeItemToCart: (id: string) => void
	finalizeOrder: (data: FormValues) => void
	updateTotal: () => {
		itensTotal: number
		priceTotal: number
		deliveryCost: number
	}
}

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

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({
	children,
}: ShoppingCartContextProps) {
	const [coffeeData, setCoffeeData] = useState<CoffeeData[]>(() => {
		const initialData = coffeesItens
		return initialData
	})
	const [cartItens, setCartItens] = useState<ShoppingCartItem[]>([])
	const [orderConfirmed, setOrderConfirmed] = useState({} as any)

	const itensTotal = cartItens.reduce((acc, item) => acc + item.quantity, 0)
	const priceTotal = cartItens.reduce(
		(acc, item) => (acc += item.quantity * item.price),
		0
	)

	function finalizeOrder(data: FormValues) {
		const newData = {
			city: voca.titleCase(data.city),
			complement: voca.titleCase(data.complement),
			neighborhood: voca.titleCase(data.neighborhood),
			number: data.number,
			paymentMethod: data.paymentMethod,
			postalCode: data.postalCode,
			state: data.state,
			street: voca.titleCase(data.neighborhood),
		}

		setOrderConfirmed(newData)
	}


	function updateTotal() {
		return { itensTotal, priceTotal, deliveryCost: 5.2 }
	}

	function incrementQuantity(id: string) {
		const itemExists = cartItens.some((item) => item.id === id)

		if (itemExists) {
			const updatedCart = cartItens.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})

			setCartItens(updatedCart)
		} else {
			const itemReturn = coffeeData.find((item) => item.id === id)
			if (itemReturn) {
				const newItem = {
					id: itemReturn?.id,
					name: itemReturn?.name,
					price: itemReturn?.price,
					coffeeImg: itemReturn?.coffeeImg,
					quantity: 1,
				}
				setCartItens([...cartItens, newItem])
			}
		}
	}

	function removeItemToCart(id: string) {
		const newlistItens = cartItens.filter((item) => item.id !== id)

		setCartItens(newlistItens)
	}

	function decrementQuantity(id: string) {
		const itemExists = cartItens.some((item) => item.id === id)

		if (itemExists) {
			const updatedCart = cartItens.map((item) => {
				if (item.id === id) {
					if (item.quantity < 0) {
						return item
					} else {
						return { ...item, quantity: item.quantity - 1 }
					}
				}
				return item
			})

			const itemsToRemove = updatedCart.filter((item) => item.quantity > 0)
			setCartItens(itemsToRemove)
		}
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				orderConfirmed,
				finalizeOrder,
				removeItemToCart,
				incrementQuantity,
				decrementQuantity,
				cartItens,
				coffeeData,
				updateTotal,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
