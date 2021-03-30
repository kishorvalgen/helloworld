import React, {Component} from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Counter/>
        {/* <Message/> */}
          {/* <Greet name="NameOne" nikName="One">
            <p>This is child props</p>
          </Greet>
          <Greet name="NameTwo" nikName="Two">
            <button>Click</button>
          </Greet>*/
           <Greet name="NameThree" nikName="Three"/> 
          /*<Welcome name="NameOne" nikName="One"></Welcome>
          <Welcome name="NameTwo" nikName="Two"></Welcome>*/}
          <Welcome name="NameThree" nikName="Three"></Welcome>
          <Hello/> 
      </div>
    );
  }
}

export default App;
