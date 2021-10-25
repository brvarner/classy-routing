import React from "react";
import ghibli from "../media/Ghibli.png"
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <div className="px-4 pt-5 my-5 text-center">
                <h1 className="display-4 fw-bold">Welcome to the Ghibli Site!</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Studio Ghibli is a Japanese animation studio that's produced dozens of classics throughout the years. Learn more about the films and the characters that make them special here.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <Link to={'./films'} className="btn-home">View Films</Link>
                        <Link to={'./people'} className="btn-home">View People</Link>
                        <Link to={'./locations'} className="btn-home">View Locations</Link>
                    </div>
                </div>
                <div className="" style={{maxHeight: "50vh"}}>
                    <div className="container px-5">
                        <img src={ghibli} className="img-fluid center-block shadow" alt="Ghibli-logo"></img>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home