import React from "react";
import { Link } from "react-router-dom";

class Locations extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            locations: []
        }
    }

    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/locations')
        .then(res => res.json())
        .then(locations => this.setState({ locations }))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
               {this.state.locations.map(location => (
                   <div className="card" key={location.id}>
                   <div className="card-body d-flex justify-content-between align-items-center">
                   <div className="d-inline-flex p-2 flex-column">
                       <div className="card-title h5">{location.name}</div>
                       <div className="card-subtitle text-muted">{location.release_date}</div>
                   </div>
                   <Link to={`/locations/${location.id}`} className="btn-page">Learn More</Link>
                   </div>
               </div>
               ))}
            </div>
        )
    }
}

export default Locations