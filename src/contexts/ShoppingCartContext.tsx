import { ReactNode, createContext, useState } from 'react'
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

type ShoppingCartContextType = {
	cartItens: ShoppingCartItem[]
	coffeeData: CoffeeData[]
	addItemToCart: (id: string) => void
	removeItemToCart: (id: string) => void
	updateTotal: () => number
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

	const amountTotal = cartItens.reduce((acc, item) => acc + item.quantity, 0)

	function updateTotal() {
		return amountTotal
	}

	function addItemToCart(id: string) {
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
				removeItemToCart,
				cartItens,
				addItemToCart,
				coffeeData,
				updateTotal,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
