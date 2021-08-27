import React, {useState, useEffect} from "react";
import {Card, Grid} from "semantic-ui-react";
import axios from "axios";

//People function definition, pass in data from App.js
export default function Monster() {
    //declare  and init state
    const [monster, setMonster] = useState([]);
    const [monster2, setMonster2] = useState([]);
    //const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        //Axios gets data from the url
        axios.get("https://www.dnd5eapi.co/api/monsters/")
            .then(res =>  {
                //Invoke setData() to set the data
                setMonster(res.data.results);
                //console.log("MONSTER.RESULTS", res.data.results)
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
    // console.log("MON JS", data);
    return (
        <>
            <h1> Monster </h1>
            <button onClick = {getMonster}> GET MONSTER </button>
            {/* Set the display grid */}
            <Grid columns = {3}>
                {/* Map over data passed in from App.js
                   For each monster in data, return a grid card*/}
                {data.map((monster, i) => {
                    return (
                        <Grid.Column key = {i}>
                            <Card>
                                {/*Add comments for each card type*/}
                                <Card.Content>
                                    <Card.Header>{monster.name}</Card.Header>
                                    <Card.Description>
                                        <strong>ALIGNMENT</strong>
                                        <p>{monster.alignment}</p>
                                        <strong>TYPE</strong>
                                        <p>{monster.type}</p>
                                        <strong>SIZE</strong>
                                        <p>{monster.size}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}