
# Classy Routing

The goal of this lab is to convert, re-write, or from scratch create the same Reacting to Routing lab (using Studio Ghibli API) from the beginning of the React module. Except the design constraint is that it must be written using only Class-based Components.

 
# Getting Started

    Create a new project with Create React App.
    Delete the src and public directory and all of its contents.
    Create a new public directory and a new index.html file inside of public.
    Use the ! emmet shortcut to generate a fresh html document in the index.html file. Place <div id="root"></div> in the <body> of the html document you created. (like we did in earlier videos!)
    Create a new src directory and a components directory inside of src.
    Create an App.jsx and a index.js file inside of src.
    Write the basic "entry point" code for the index.js file, avoid copy/paste so you can practice writing it yourself!

// inside of src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

    Write a simple class component that returns some JSX for your App.jsx file.

// inside of /src/App.jsx
import React from 'react';

class App extends React.Component {
    render() {
        return (
           " <div>
               ` <h1>Hello from App Class Component!</h1>`
            </div>"
        );
    }
}

export default App;

 

You should now have a project structure that resembles the following:

node_modules/
public/
|- index.html
src/
|- components/
|- App.jsx
|- index.js
.gitignore
package-lock.json
package.json
README.md

 
# Instructions (same as before)

    Configure React Router in your application. You may use the same structure as the walkthrough video, or (if you have a better idea) you may decide on your own structure. Just make sure that it works!

    You should create three Links that look like buttons in your application. The first says "Go Home", the second says "View Films", and the last one says "View People" (or another endpoint of your choosing). Clicking these links will navigate you to the respective pages for each of these things. You can code them directly in the App.jsx or make your own <Navbar /> component instead.

    Start by only configuring ONE route. Say, for /films. After navigating to localhost:3000/films, you should see your list of films that you rendered to the browser in the previous lab. The caveat? You shouldn't need any if/else if/else logic in your render methods. The data should only be loaded and displayed when you navigate to /films. You should use this.state, componentDidMount() and fetch() to make this request.

    Once you have that route working, configure another one for /films/:filmid. With this route, you should be able to craft a Link for any film you have displayed on /films to navigate to /films/<id>, where you will list out all of the information pertaining to only that film.

    Now that you have /films and /films/:filmid working, repeat tasks 3 and 4 with another two endpoints (like People) in the Studio Ghibli API.

 
# Hints

    The walkthrough and lecture's reference material will serve as a great guide to completing this lab.
    Remember that a lot of your code will start with this. inside of a class.
    Remember to bind your this keyword by using arrow functions in your event handlers.

