const express = require ('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')
const app = express();
const cors = require('cors')

app.use(cors())

app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql: true 
    }) 
)

// Allow Cross Origin 



const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("We are live on port: ", port)
})