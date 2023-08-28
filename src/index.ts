// enum
// let numbers:number[] = []
// enum Size {
//    Small = 1,
//    Medium = 2,
//    Large = 3
// }

// console.log(Size.Large)

//function
function calculateTax(income: number, taxYear = 2022) {
	if (taxYear < 50000) {
		return income * 1.2
	}
	return income * 1.3
}
calculateTax(1)
//

//2. type alias
//simplifies type anotation using type keyword
type Employee = {
	readonly id: number
	name: string
	retire: (date: Date) => void
}

let employee: Employee = {
	id: 1,
	name: 'Minipingu',
	retire: (date: Date) => {
		console.log(date)
	},
}
employee.name = 'Mosh'

//
//3. Union type
//weight is number or string
function kgToLbs(weight: number | string): number {
	//Narrowing
	//if weight not number, we need to parse to Integer
	if (typeof weight === 'number') {
		return weight * 2.2
	} else {
		return parseInt(weight) * 2.2
	}
}

kgToLbs(10)
kgToLbs('10kg')

// 4. Intersection Types
//combine 2 or more types into a single type
type Draggable = {
	drag: () => void
}

type Resizable = {
	resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
}

//5. Literal Types
//yes you can do this
type Quantity = 50 | 100
let quantity: Quantity = 100
//cm or inch called literal (straight meaning)
type Metric = 'cm' | 'inch'

// 6. Nullable Types
//by default, typescript resctrict passing null value, because it can cause error if we are accessing property or method, because no property or method for null
// but you can use type union (or) if you want to pass null and undefined
function greet(name: string | null | undefined) {
	if (name) {
		console.log(name.toUpperCase())
	} else {
		console.log('Hola')
	}
}

greet(undefined)

// 7. Optional Chaining

type Customer = {
	birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
// optional chaining using ? if there is customer, birthday can be accessed
//this is called Optional property access operator
console.log(customer?.birthday)
