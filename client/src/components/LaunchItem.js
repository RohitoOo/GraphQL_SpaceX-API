import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
const LaunchItem = ({launch: {flight_number, mission_name, launch_success, launch_year}}) => (
    <td className="card card-body container">
        <div className="row">
            <div className="col-md-9">
                Mission : <span  className={classNames({
                            "text-success" : launch_success,
                            "text-danger": !launch_success
                            })}> <h4>{mission_name} </h4>  
                        </span> 
                        <div></div>
                Year : <span> <strong> {launch_year}</strong>  
                        </span>           
            </div>
            <div className="col-md-3">
                            <Link to={`/launch/${flight_number}`}  >
                                <button className="btn btn-primary"> Launch Details </button>
                            </Link>
            </div>
        </div>
    </td>
)
   
export default LaunchItem