const img = import.meta.glob('../assets/*.(png|jpe?g|svg)') ?? {}

const entries = Object.entries(img)

type PathObjReturn = {
	Type_Americano: string;
	Type_Arabe: string;
	Type_Cafe_com_Leite: string;
	Type_Cafe_Gelado: string;
	Type_Capuccino: string;
	Type_Chocolate_Quente: string;
	Type_Cubano: string;
	Type_Expresso_Cremoso: string;
	Type_Expresso: string;
	Type_Havaiano: string;
	Type_Irlandes: string;
	Type_Latte: string;
	Type_Macchiato: string;
	Type_Mochaccino: string;

}

function loadImage() {
	const pathObj = entries.map((item) => {
		const pathName = item[0].split('/')[2].split('.')[0]
		return { [pathName]: `src/assets/${item[0].split('/')[2]}` }
	})

	const mergedObject = pathObj.reduce((result, currentObj) => {
		return { ...result, ...currentObj }
	}, {})

	return mergedObject as PathObjReturn
}


export const pathImg = loadImage()
