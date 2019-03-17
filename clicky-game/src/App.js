import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";

//Render the entire app
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper/>        
      </div>
    );
  }
}

//Export to index.js
export default App;
