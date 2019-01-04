const express = require ('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')
const app = express();

console.log({schema})
app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql: true 
    }) 
)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("We are live on port: ", port)
})