import { v4 as uuidv4 } from 'uuid'
import { pathImg } from './importImg'

interface CoffeeItem {
	id: string
	name: string
	description: string
	price: number
	coffeeImg: string
	label: string[]
}

const label = {
	Tradicional: 'TRADICIONAL',
	Com_Leite: 'COM LEITE',
	Especial: 'ESPECIAL',
	Alcoolico: 'ALCOÓLICO',
	Gelado: 'GELADO',
}

export const coffeesItens: CoffeeItem[] = [
	{
		id: uuidv4(),
		name: 'Expresso Tradicional',
		description:
			'Café expresso tradicional feito com água quente e grãos moídos',
		price: 10.0,
		coffeeImg: pathImg.Type_Expresso,
		label: [label.Tradicional],
	},
	{
		id: uuidv4(),
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 8.9,
		coffeeImg: pathImg.Type_Americano,
		label: [label.Tradicional],
	},
	{
		id: uuidv4(),
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 10.5,
		coffeeImg: pathImg.Type_Expresso_Cremoso,
		label: [label.Tradicional],
	},
	{
		id: uuidv4(),
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 11.9,
		coffeeImg: pathImg.Type_Cafe_Gelado,
		label: [label.Tradicional, label.Gelado],
	},
	{
		id: uuidv4(),
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 9.8,
		coffeeImg: pathImg.Type_Cafe_com_Leite,
		label: [label.Tradicional, label.Com_Leite],
	},
	{
		id: uuidv4(),
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 12.5,
		coffeeImg: pathImg.Type_Latte,
		label: [label.Tradicional, label.Com_Leite],
	},
	{
		id: uuidv4(),
		name: 'Cappuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 11.0,
		coffeeImg: pathImg.Type_Capuccino,
		label: [label.Tradicional, label.Com_Leite],
	},
	{
		id: uuidv4(),
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		price: 10.8,
		coffeeImg: pathImg.Type_Macchiato,
		label: [label.Tradicional, label.Com_Leite],
	},
	{
		id: uuidv4(),
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 11.7,
		coffeeImg: pathImg.Type_Mochaccino,
		label: [label.Tradicional, label.Com_Leite],
	},
	{
		id: uuidv4(),
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 9.9,
		coffeeImg: pathImg.Type_Chocolate_Quente,
		label: [label.Especial, label.Com_Leite],
	},
	{
		id: uuidv4(),
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 12.8,
		coffeeImg: pathImg.Type_Cubano,
		label: [label.Especial, label.Alcoolico, label.Gelado],
	},
	{
		id: uuidv4(),
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 12.3,
		coffeeImg: pathImg.Type_Havaiano,
		label: [label.Especial],
	},
	{
		id: uuidv4(),
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 11.5,
		coffeeImg: pathImg.Type_Arabe,
		label: [ label.Especial],
	},
	{
		id: uuidv4(),
		name: 'Irlandês',
		description: 'Bebida à base de café, uísque irlandês, açúcar e chantilly',
		price: 13.2,
		coffeeImg: pathImg.Type_Irlandes,
		label: [label.Especial, label.Alcoolico],
	},
]
