import React from "react";

class FilmDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film: null
        }
    }

    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(film => this.setState({ film }))
        .catch(err => console.log(err))
    }

    render(){

        if(!this.state.film){
            return (
                <h1>Loading</h1>
            )
        }
        return(
        <main className="container d-flex flex-column align-items-center">
            <img src={this.state.film?.movie_banner} alt={`Poster for ${this.state.film?.title}`} style={{maxHeight: "30vh"}}/>
            <h1>{this.state.film?.title}</h1>
            <h5>Original Title: {this.state.film?.original_title}</h5>
            <div className="text-muted">Released in: {this.state.film?.release_date}</div>
            <div className="text-muted">Runtime: {this.state.film?.running_time} minutes</div>
            <div className="">{this.state.film?.description}</div>
            <div className="text-muted mt-2">Rotten Tomatoes Score: {this.state.film?.rt_score}</div>
            <button onClick={() => this.props.history.goBack()} className="btn-page mt-3">Back to Films</button>
        </main>
        )
    }
}

export default FilmDetails