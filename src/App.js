import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Monster from "./components/Monster";
import axios from "axios";
import Classes from "./components/Classes";

//Main function definition
function App() {
    //declare and init monster state
    const [monster, setMonster] = useState([]);
    const [loading, setLoading] = useState(true);

    //Declare and init character classes state
    const [classes, setClasses] = useState([]);
    //const [classesLoading, setClassesLoading] = useState(true);

    let isRendered = useRef(false);
    useEffect(() => {
        isRendered = true;
        //Axios gets monster data from the api
        axios
            .get("https://www.dnd5eapi.co/api/monsters/")
            .then((res) => {
                //Invoke setData() to set the data
                setMonster(res.data.results);
                console.log("MONSTER.RESULTS", res.data.results);
                //Generate a random number to randomly choose a monster
                var randomNumber = Math.floor(Math.random() * 330);
                //Assign the index to a variable
                const monsterName = res.data.results[`${randomNumber}`].index;

                axios
                    .get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
                    .then((res) => {
                        console.log("AXIOS 2: ", res.data);
                        if (isRendered) {
                            setMonster(res.data);
                        }
                        return null;
                        //Set loading to false
                        setLoading(false);
                    });
            })

            //Catch() function
            .catch((err) => console.log("There was an error. Fix your code!" + err));

        return () => {
            isRendered = false;
        };

        //Axios gets character class data from the api
        //empty array to prevent infinite calls
    }, []);

    //useEffect to call classes
    useEffect(() => {
        isRendered = true;
        //Axios gets monster data from the api
        axios
            .get("https://www.dnd5eapi.co/api/classes/")
            .then((res) => {
                //Invoke setData() to set the data
                setClasses(res.data.results);
                console.log("CLASSES.RESULTS", res.data.results);
                //Generate a random number to randomly choose a monster
                var randomNumber = Math.floor(Math.random() * 12);
                //Assign the index to a variable
                const classesName = res.data.results[`${randomNumber}`].index;
                console.log("CLASSES.INDEX", res.data.results[`${randomNumber}`].index);
                axios
                    .get(`https://www.dnd5eapi.co/api/classes/${classesName}`)
                    .then((res) => {
                        console.log("AXIOS 2classes: ", res.data);
                        if (isRendered) {
                            setClasses(res.data);
                        }
                        //Set loading to false
                        setLoading(false);
                    });
            })

            //Catch() function
            .catch((err) => console.log("There was an error. Fix your code!" + err));

        return () => {
            isRendered = false;
        };

        //Axios gets character class data from the api
        //empty array to prevent infinite calls
    }, []);

    return (
        <>
            <Router>
                {/* Render the NavBar component here */}
                <Navbar />
                <Container>
                    {/*Ternary Loading indicator. If loading is true...*/}
                    {loading ? (
                        //Show the loading screen
                        <Dimmer active inverted>
                            <Loader inverted> LOADING...</Loader>
                        </Dimmer>
                    ) : (
                        //Else, access the switch
                        <Switch>
                            {/*Route to home component*/}
                            <Route exact path="/">
                                <Home />
                            </Route>
                            {/*Route to people component,pass in classes as props*/}
                            <Route exact path="/monster">
                                <Monster data={monster} />
                            </Route>
                            {/*Route to classes component*/}
                            <Route exact path="/classes">
                                <Classes data={classes} />
                            </Route>
                        </Switch>
                    )}
                </Container>
            </Router>
        </>
    );
}

export default App;
