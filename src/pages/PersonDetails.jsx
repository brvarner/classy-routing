import React from "react";

class PersonDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            person: null, 
            title: null
        }
    }

    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(person => this.setState({ person }))
        .catch(err => console.log(err))
    }

    componentDidUpdate(){
        fetch(this.state.person?.films[0])
        .then(res => res.json())
        .then(title => this.setState({ title }))
    }

    render(){

        if(!this.state.person){
            return (
                <h1>Loading</h1>
            )
        }
        
        return(
        <main className="container d-flex flex-column align-items-center">
            <h1>{this.state.person?.name}</h1>
            <h3 className="">Appears in: {this.state.title?.title}</h3>
            <h5 className="text-muted">Age: {this.state.person?.age}</h5>
            <div className="text-muted">Eye Color: {this.state.person?.eye_color}</div>
            <div className="text-muted mt-2">Film Description: {this.state.title?.description}</div>
            <button onClick={() => this.props.history.goBack()} className="btn-page mt-3">Back to Films</button>
        </main>
        )
    }
}

export default PersonDetails