const { execute } = require('./.graphclient')

const myQuery = `
	{
		accounts(where: { id: "0xf22f00d0b95b1b728078066e5f4410f6b2be8fae" }) {
			averageAmountSpent
			id
			numberOfPunksAssigned
			numberOfPunksOwned
			numberOfPurchases
			numberOfSales
			accountUrl
			numberOfTransfers
			totalEarned
			totalSpent
		}
	}
`

async function executeQuery() {
	const result = await execute(myQuery, {})
	console.log(JSON.stringify(result))
}
executeQuery()
