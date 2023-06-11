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

	function addItemToCart(id: string) {
		const itemExists = cartItens.some((item) => item.id === id)

		if (itemExists) {
			// Se o item já existe no carrinho, faça uma cópia do carrinho
			const updatedCart = cartItens.map((item) => {
				if (item.id === id) {
					// Se encontrar o item, incremente a quantidade
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})

			// Atualize o estado do carrinho com o novo array
			setCartItens(updatedCart)
		} else {
			// Se o item não existe no carrinho, crie um novo objeto do item
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
			// Se o item já existe no carrinho, faça uma cópia do carrinho
			const updatedCart = cartItens.map((item) => {
				if (item.id === id) {
					// Se encontrar o item, decremente a quantidade
					if (item.quantity < 0) {
						return item
					} else {
						return { ...item, quantity: item.quantity - 1 }
					}
				}
				return item
			})

			// Atualize o estado do carrinho com o novo array
			const itemsToRemove = updatedCart.filter((item) => item.quantity > 0)
			setCartItens(itemsToRemove)
		}
	}

	return (
		<ShoppingCartContext.Provider
			value={{ removeItemToCart, cartItens, addItemToCart, coffeeData }}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
