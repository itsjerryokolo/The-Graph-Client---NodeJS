function queryEnsName() {
	return (x = `query
  GetDomain($address: String!) {
    domains(where: { owner: $address }) {
      id
      name
      labelName
      labelhash
    }}
    `)
}
var ensTransfersLive = `query MyQuery {
  transfers(first: 10, orderBy: blockNumber, orderDirection: desc){
    blockNumber
    transactionID
    domain {
      id
    }
  }
}
`
module.exports = { queryEnsName, ensTransfersLive }
