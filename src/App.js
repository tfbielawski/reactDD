import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Dimmer, Loader} from "semantic-ui-react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Monster from "./components/Monster";
import axios from "axios";
//import Planets from "./components/Planets";

//Main function definition
function App() {



  return (
    <>
        <Router>
           {/* Render the NavBar component here */}
           <Navbar/>
            <Container>
                {/*Ternary Loading indicator. If loading is true...*/}
                {loading ? (
                    //Show the loading screen
                    <Dimmer active inverted>
                        <Loader inverted > LOADING...</Loader>
                    </Dimmer>)
                    //Else, access the switch
                    : (
                        <Switch>
                            {/*Route to home component*/}
                            <Route exact path = "/">
                                <Home/>
                            </Route>
                            {/*Route to people component,pass in people as props*/}
                            <Route exact path = "/monster">
                                {/*<Monster data = {monster}/>*/}
                                <Monster />
                            </Route>
                            {/*Route to planets component*/}
                            {/*<Route exact path = "/planets">*/}
                            {/*    <Planets data = {planets}/>*/}
                            {/*</Route>*/}
                    </Switch>
                ) }

            </Container>
       </Router>
    </>
  );
}

export default App;
