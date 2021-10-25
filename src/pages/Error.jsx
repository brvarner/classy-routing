import React from "react";

class Error extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container d-flex flex-column align-items-center">
                <h1 className="">Whoops!</h1>
                <img className="img-fluid" src="https://media.giphy.com/media/qfF4Q1q6g4QRW/giphy.gif" alt="" />
                <p className="mt-2">You might be lost! Wanna go home?</p>
                <button onClick={() => this.props.history.push('/')} className="btn-page mt-3">Go Home</button>
            </div>
        )
    }
}

export default Error