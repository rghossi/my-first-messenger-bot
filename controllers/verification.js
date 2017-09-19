module.exports = (req, res) => {
  const hubChallenge = req.query['hub.challenge']
  const hubMode = req.query['hub.mode']

  // TODO: Store token in a environment variable
  const verifyTokenMatches = (req.query['hub.verify_token'] === 'y5zEugjUjHQg2podVw2W')

  if (hubMode && verifyTokenMatches) {
    res.status(200).send(hubChallenge)
  } else {
    res.status(403).end()
  }
}
