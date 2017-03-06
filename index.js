const axios = require('axios')
const Promise = require('bluebird')

// with 2+ sec response time
Promise.all([
    'http://localhost:3001/users',
    'http://localhost:3000/users'
].map(axios.get))
    .then(([resp1, resp2]) =>
        [resp1.data, resp2.data])
    .then(console.log)
    .catch(onError)

Promise.race([
    'http://localhost:3001/users',
    'http://localhost:3000/users'
].map(axios.get))
    .then((resp1) => resp1.data)
    .then(console.log)
    .catch(onError)

function onError({ response: { status, statusText } }) {
    console.error(status, statusText)
}
