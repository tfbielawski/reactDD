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
    //declare  and init state
    const [monster, setMonster] = useState([]);
    //const [monster2, setMonster2] = useState([]);
    //const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    //USe Effect
    //useEffect(() => {
    //Async function definition to get the monster api data
    //     async function fetchMonster() {
    //
    //         let res = await fetch("https://www.dnd5eapi.co/api/monsters/")
    //         let data = await res.json();
    //         setMonster(data.results);
    //         console.log("SetMonster>>>>", data.results);
    //
    //         //Generate a random number to randomly choose a monster
    //         //var randomNumber = Math.floor(Math.random() * 330);
    //
    //         // //Interpolate the index by the random number, assign to MonsterName
    //         // const monsterName = data2.results[`${randomNumber}`].index;
    //         // console.log("MONSTER NAME>>>>",monsterName);
    //
    //         //Call the api again, this time with the random monster endpoint
    //         // let res = await fetch (`https://www.dnd5eapi.co/api/monsters/${monsterName}`);
    //         // let data = await res.json();
    //         //Call setMonster function, pass in results
    //
    //
    //         //Set loading to false
    //         setLoading(false);
    //     }
    //     //Async function definition to get the planet api data
    //     // async function fetchPlanets() {
    //     //     let res = await fetch("https://swapi.dev/api/planets/");
    //     //     //Assign results to data
    //     //     let data = await res.json();
    //     //     setPlanets(data.results);
    //     //     //Set loading to false
    //     //     setLoading(false);
    //     //
    //     // }
    //
    //     //Invoke the functions
    //     fetchMonster();
    //     //fetchPlanets();
    //     console.log("MONSTER >>> ", monster);
    //
    //     //Empty array to prevent endless calls
    // }, [])

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
                                <Monster data = {monster}/>
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
