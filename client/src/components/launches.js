import React, {Fragment} from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_success
            launch_year
        }
    }
`

class Launches extends React.Component{
    render(){
        return(
            <Fragment>
                <h1 className="display-4 my-4">Launches</h1>
                <MissionKey/>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) return   console.log(error);
                            if(data) { return (
                                <table className="table table-hover">
                                    <tbody>
                                    {data.launches.map( (launch,i) => 
                                        <tr key={i} className="row mb-3">
                                             <LaunchItem launch={launch} />
                                        </tr> 
                                    )}
                                    </tbody>
                                 </table>
                            ) }
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launches 