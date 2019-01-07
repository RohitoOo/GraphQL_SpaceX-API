import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) { 
            flight_number
            mission_name
            launch_success
            launch_year
            rocket {
                rocket_name
                rocket_type
            }
        }
    }
`
class Launch extends React.Component {
    constructor(props){
        super()
    }
    render(){
        let {flight_number} = this.props.match.params
        flight_number = parseInt(flight_number)
        return(
            <div>
               <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                   {({loading,error, data }) => {
                        if(loading) return <h4>Loading...</h4>
                        if(error) return   console.log(error);

                        const {mission_name} = data.launch 
                        const {launch_year} = data.launch 
                        const {launch_success} = data.launch 
                        const {rocket_name} = data.launch.rocket
                        const {rocket_type} = data.launch.rocket
                    //   console.log(mission_name)
                    //   console.log(rocket_name)
                    return (
                        <div className="card card-body display-4 my-3 ml-3">
                             <span className="text-dark">Mission: {mission_name} - {launch_year}</span>
                             <span className="text-primary">Rocket: {rocket_name}</span>
                             <span className="text-dark">Rocket Type: {rocket_type}</span>
                             <div className={classNames({
                                 "text-success": launch_success,
                                 "text-danger" : !launch_success
                             })}>Success: {launch_success ? "Yes" : "No"}</div>
                        </div>   
                    )
                                           
                   } }
               </Query>
               <Link to="/" className="btn btn-secondary ml-3" >Back</Link>
            </div>
        )
    }
}

export default Launch