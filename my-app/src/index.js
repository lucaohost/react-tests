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
            <h1>Clock</h1>
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
function welcomeFunction(props) {
    return <h2>Hello, {props.name}</h2>
}
ReactDOM.render(welcomeFunction(myObject), document.querySelector("#root3"));

//===================test4========================
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
const anotherElement = <Welcome name="Sara" />;
ReactDOM.render(
    anotherElement, document.querySelector("#root4")
);

//===================test5========================
class WelcomeEquivalent extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>
    }
}
const componentA = <WelcomeEquivalent name="Sara"></WelcomeEquivalent>
ReactDOM.render(componentA, document.querySelector("#root5"));

//===================test6========================
function EncapsulatedClockWithFuckingJohnCennaMusic(props){
    return (
        <div>
            <h1><a href="https://www.youtube.com/watch?v=NxQgZkWZtBE" target="blank">The Time is Now</a></h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tickTack(){
    ReactDOM.render(
        <EncapsulatedClockWithFuckingJohnCennaMusic date={new Date()}/>,
        document.getElementById("root6")
    );
}
setInterval(tickTack, 1000);
