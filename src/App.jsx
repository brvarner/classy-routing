import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDetails from "./pages/FilmDetails";
import People from "./pages/People";
import PersonDetails from "./pages/PersonDetails";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";
import Error from "./pages/Error";
import "./stylesheets/PageButtons.css"
import "./stylesheets/HomeButtons.css"

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <BrowserRouter>
            <div className="container">
                <Navbar />
                <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/films" component={Films} />
                            <Route exact path="/films/:id" component={FilmDetails} />
                            <Route exact path="/people" component={People} />
                            <Route exact path="/people/:id" component={PersonDetails} />
                            <Route exact path="/locations" component={Locations} />
                            <Route exact path="/locations/:id" component={LocationDetails} />
                            <Route path="*" component={Error} />
                        </Switch>
                </div>
            </div>
        </BrowserRouter>
        )   
    }
}

export default App