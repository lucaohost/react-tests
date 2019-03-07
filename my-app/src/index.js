import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

//====================test1=======================
const element = <h1>Hello, World</h1>;
ReactDOM.render(element, document.querySelector("#root"));

//===================test2========================
function tick() {
    var elementTwo = (
        <div        >
            <h1>Hello, World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <Name name="Lucas"></Name>
            <Age idade="20"></Age>
        </div>
    );
    ReactDOM.render(elementTwo, document.querySelector("#root2"));
}
setInterval(tick, 1000);

class Name extends React.Component {
    render() {
        return <h3>My name is {this.props.name}</h3>;
    }
}

class Age extends React.Component {
    render() {
        return <h3>I have, {this.props.idade} years old</h3>
    }
}

// ===================test3========================
let myObject = { name: "Lucas", age: 20 };
function welcomeFunction(props){
    return <h2>Hello, {props.name}</h2>
}
ReactDOM.render(welcomeFunction(myObject), document.querySelector("#root3"));

//===================test4========================

