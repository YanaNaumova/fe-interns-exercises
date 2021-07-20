import React from 'react';

import './App.css';

import "./index.css";
import {Layouts} from "./Layout";

function status(res:any) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;


}

function App() {

    return (
    <div className="App">
        <Layouts/>
    </div>
  );
}

export default App;
