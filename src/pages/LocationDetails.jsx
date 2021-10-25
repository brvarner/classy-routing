import React from "react";

class LocationDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            location: null, 
            title: null
        }
    }

    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(location => this.setState({ location }))
        .catch(err => console.log(err))
    }

    componentDidUpdate(){
        fetch(this.state.location?.films[0])
        .then(res => res.json())
        .then(title => this.setState({ title }))
    }

    render(){

        if(!this.state.location){
            return (
                <h1>Loading</h1>
            )
        }
        
        return(
        <main className="container d-flex flex-column align-items-center">
            <h1>{this.state.location?.name}</h1>
            <h3 className="">Appears in: {this.state.title?.title}</h3>
            <h5 className="text-muted">Climate: {this.state.location?.climate}</h5>
            <div className="text-muted">Terrain: {this.state.location?.terrain}</div>
            <div className="text-muted mt-2">Film Description: {this.state.title?.description}</div>
            <button onClick={() => this.props.history.goBack()} className="btn-page mt-3">Back to Films</button>
        </main>
        )
    }
}

export default LocationDetails