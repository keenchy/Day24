import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return ( <
            div className = 'App' >
            <
            button onClick = { this.setLocalStorage } > setLocalStorage < /button>  <
            button onClick = { this.getLocalStorage } > getLocalStorage < /button> <
            /div>
        );
    }
    setLocalStorage() {

        localStorage.setItem("Arena", "Selection Month");
    }

    getLocalStorage() {

        localStorage.getItem("Arena");
    }
}

export default App;