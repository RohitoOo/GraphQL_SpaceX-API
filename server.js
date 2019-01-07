const express = require ('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')
const app = express();
const cors = require('cors')
const path = require('path')


app.use(cors())

app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql: true 
    }) 
)

app.get('*', (req,res) => {
    res.sendFile(path.resolve(_dirname, "public", 'index.html'))
})

// Allow Cross Origin 

app.use(express.static('public'))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("We are live on port: ", port)
})