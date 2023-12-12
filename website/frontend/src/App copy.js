import React from 'react';
import { render } from "react-dom";
import '../static/css/index.css';
import HomePage from './views/HomePage';
import Photography from './views/Photography';


function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      {/*<HomePage />
       <Photography />*/}
    </div>
  );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv)

export default App;


