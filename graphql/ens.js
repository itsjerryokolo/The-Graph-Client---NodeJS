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

module.exports = { queryEnsName }
