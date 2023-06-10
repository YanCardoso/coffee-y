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
	quantity?: number
}

interface ShoppingCartContextProps {
	children: ReactNode
}

type ShoppingCartContextType = {
	coffeeData: CoffeeData[]
	addItemToCart: (id: string) => void
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

	function addItemToCart(id: string) {}

	return (
		<ShoppingCartContext.Provider value={{ addItemToCart, coffeeData }}>
			{children}
		</ShoppingCartContext.Provider>
	)
}
