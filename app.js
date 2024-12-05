const footballers = [
	{ fullName: 'Erling Haaland', age: 23, country: 'Norway' },
	{ fullName: 'Kevin De Bruyne', age: 32, country: 'Belgium' },
	{ fullName: 'Mohamed Salah', age: 31, country: 'Egypt' },
	{ fullName: 'Neymar Jr.', age: 32, country: 'Brazil' },
	{ fullName: 'Virgil van Dijk', age: 32, country: 'Netherlands' },
	{ fullName: 'Marc-André ter Stegen', age: 31, country: 'Germany' },
	{ fullName: 'Luka Modrić', age: 38, country: 'Croatia' },
	{ fullName: 'Harry Kane', age: 30, country: 'England' },
	{ fullName: 'Son Heung-min', age: 31, country: 'South Korea' },
	{ fullName: 'Pedri González', age: 21, country: 'Spain' },
]

const tableBody = document.querySelector('tbody')
const renderButton = document.querySelector('button')

const addRandomFootballer = () => {
	const randomIndex = Math.floor(Math.random() * footballers.length)
	const footballer = footballers[randomIndex]

	const rowCount = tableBody.rows.length

	const newRow = document.createElement('tr')

	newRow.innerHTML = `
    <td>${rowCount + 1}</td>
    <td>${footballer.fullName}</td>
    <td>${footballer.age}</td>
    <td>${footballer.country}</td>
  `

	tableBody.appendChild(newRow)
}

renderButton.addEventListener('click', addRandomFootballer)
