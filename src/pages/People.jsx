import React from "react";
import { Link } from "react-router-dom";

class People extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => this.setState({ people }))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {this.state.people.map(person => (
                    <div className="card" key={person.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="card-title h5">{person.name}</div>
                        <Link to={`/people/${person.id}`} className="btn-page">Learn More</Link>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default People