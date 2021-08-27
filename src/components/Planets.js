import React from "react";
import {Card, Grid} from "semantic-ui-react";

//Default planets function def, pass in data from app.js
export default function Planets({ data }) {
    return (
        <>
            <h1> PLANETS </h1>
            {/* Set the display grid */}
            <Grid columns = {3}>
                {/* Map over data passed in from App.js
                   For each planet in data array, return a grid card*/}
                {data.map((planet, i) => {
                    return (
                        <Grid.Column key = {i}>
                            <Card>
                                {/*Add comments for each card type*/}
                                <Card.Content>
                                    <Card.Header>{planet.name}</Card.Header>
                                    <Card.Description>
                                        <strong>CLIMATE</strong>
                                        <p>{planet.climate}</p>
                                        <strong>POPULATION</strong>
                                        <p>{planet.population}</p>
                                        <strong>DIAMETER</strong>
                                        <p>{planet.diameter}</p>
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