import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
