import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_success
        }
    }
`

class Launches extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1 className="display-4 my-4">Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error)  console.log(error);
                            if(data) { return (
                                <table className="table table-hover">
                                    <tbody>
                                    {data.launches.map( each => 
                                    <tr className="table-primary">
                                        {each.flight_number} - {each.mission_name}
                                    </tr> 
                                    )}
                                     </tbody>
                                 </table>
                            ) }
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches 