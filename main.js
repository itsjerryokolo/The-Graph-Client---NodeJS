const { execute } = require('./.graphclient')
const { queryEnsName } = require('./graphql/ens')

async function executeQuery() {
	let address = '0xbcb4ed1f05b8f017cf23e739552a6d81a014ee84'

	await execute(
		//Query
		queryEnsName(),
		//Variable
		{ address: address }
		//Config Object
		//{config{ api: MY_API_TOKEN }}
	)
		.then((res) => console.log('User:', `${address}`, res.data))
		.catch((err) => console.log(err))
		.finally(() => console.log('ENS QUERY EXECUTED'))
}

executeQuery()
