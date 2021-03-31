import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return ( <
            div className = 'App' >
            <
            button onClick = { this.setMyStorage } > setMyStorage < /button> < /
            div >
        );
    }
    setMyStorage() {

        var myCookieData = "2011 = Year";


        get.localStorage.setItem("Paragon", "yes", "but Arena first");

        get.sessionStorage.setItem("fronted", "React");
    }
}

export default App;