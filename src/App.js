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
        axios.get("https://www.dnd5eapi.co/api/monsters/troll")
            .then(res =>  {
                //Invoke setData() to set the data
                setMonster(res.data);
                console.log("MONSTER.RESULTS", res.data)
                //Set loading to false
                setLoading(false);
                //Generate a random number to randomly choose a monster
                //var randomNumber = Math.floor(Math.random() * 330);
                //Assign the index to a variable
               // const monsterName = res.data.results[`${randomNumber}`].index;
                // console.log("random", res.data.results[`${randomNumber}`]);
                // console.log("index", res.data.results[`${randomNumber}`].index);
                // axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
                //     .then(res => {
                //         setLoading(false);
                //         setMonster(res.data.results);})
            })

            //Catch() function
            .catch(err => console.log("There was an error. Fix your code!" + err))

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
