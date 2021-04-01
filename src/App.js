import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting/>
        {/*<ParentComponent/>
        <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <Counter/>
        <Message/>
          <Greet name="NameOne" nikName="One">
            <p>This is child props</p>
          </Greet>
          <Greet name="NameTwo" nikName="Two">
            <button>Click</button>
          </Greet>
           <Greet name="NameThree" nikName="Three"/> 
          <Welcome name="NameOne" nikName="One"></Welcome>
          <Welcome name="NameTwo" nikName="Two"></Welcome>
          <Welcome name="NameThree" nikName="Three"></Welcome>
          <Hello/>  */}
      </div>
    );
  }
}

export default App;
