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
    //declare and init state
    const [monster, setMonster] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        //Axios gets data from the url
        //async await  lecture approx 2:20


        axios.get("https://www.dnd5eapi.co/api/monsters/")
            .then(res =>  {
                //Invoke setData() to set the data
                setMonster(res.data.results);
                console.log("MONSTER.RESULTS", res.data.results)
                //Generate a random number to randomly choose a monster
                //var randomNumber = Math.floor(Math.random() * 330);
                //Assign the index to a variable
                //const monsterName = res.data.results[`${randomNumber}`].index;
                return res.data.results;
                // axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
                //     .then( res => {
                //         console.log("AXIOS 2: ", res.data)
                //         setMonster(res.data)
                //         //Set loading to false
                //         setLoading(false);
                //     })
            })
            //Catch() function
            .catch(err => console.log("There was an error. Fix your code!" + err));

        for ( let index of res.data.results ) {
            axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
                .then(res => {
                    console.log("loop ", res.data)
                    setMonster(res.data)
                    //Set loading to false
                    setLoading(false);
                })
        }
        //empty array to prevent infinite calls
    }, [])


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
                                    <Monster data= {monster}/>
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
