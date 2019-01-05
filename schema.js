const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLList} = require('graphql')

const axios = require('axios')


const LaunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLInt },
        launch_date_local: { type: GraphQLInt },
        launch_success: { type: GraphQLBoolean },
        rocket: {type: RocketType}
    })
})

const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
        first_stage: {type: FirstStageType}
    })
})

const FirstStageType = new GraphQLObjectType({
    name: "FirstStageType",
    fields: () => ({
        cores: {type: new GraphQLList (CoreType)}
    })
})

const CoreType = new GraphQLObjectType({
    name: "CoreType",
    fields: () => ({
        core_serial: {type: GraphQLString},
        flight: {type: GraphQLInt}
    })
})

// Root Query 

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
        fields: {
            launches: {type: new GraphQLList(LaunchType),
            resolve(parent, args){
                return axios.get("https://api.spacexdata.com/v3/launches")
                .then(res => res.data)
            }
            },
            launch: {
                type: LaunchType,
                args:{
                    flight_number: {type: GraphQLInt}
                },
                resolve(parent,args){
                    return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data)
                }
                
            },
            rockets: {type: new GraphQLList(RocketType),
                resolve(parent, args){
                    return axios.get("https://api.spacexdata.com/v3/rockets")
                    .then(res => res.data)
                }
            },
            rocket: {
                type: RocketType,
                args: {
                    rocket_id: {type: GraphQLInt}
                },
                resolve(parent,args){
                    return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
                    .then(res => res.data)
                }
            },
        }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})