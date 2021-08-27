import React from "react";
import {Card, Grid} from "semantic-ui-react";

//People function definition, pass in data from App.js
export default function Monster( data) {

   console.log("MON JS", data);
    return (
        <>
            <h1> Monster </h1>
            {/* Set the display grid */}
            {/*<Grid columns = {3}>*/}
            {/*    /!* Map over data passed in from App.js*/}
            {/*       For each monster in data, return a grid card*!/*/}
            {/*    {data.map((monster, i) => {*/}
            {/*        return (*/}
            {/*            <Grid.Column key = {i}>*/}
            {/*                <Card>*/}
            {/*                    /!*Add comments for each card type*!/*/}
            {/*                    <Card.Content>*/}
            {/*                        <Card.Header>{monster.name}</Card.Header>*/}
            {/*                        <Card.Description>*/}
            {/*                            <strong>ALIGNMENT</strong>*/}
            {/*                            <p>{monster.alignment}</p>*/}
            {/*                            <strong>TYPE</strong>*/}
            {/*                            <p>{monster.type}</p>*/}
            {/*                            <strong>SIZE</strong>*/}
            {/*                            <p>{monster.size}</p>*/}
            {/*                        </Card.Description>*/}
            {/*                    </Card.Content>*/}
            {/*                </Card>*/}
            {/*            </Grid.Column>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</Grid>*/}
            <Grid columns = {3}>
                {/* Map over data passed in from App.js
                   For each monster in data, return a grid card*/}
                        <Grid.Column >
                            <Card>
                                {/*Add comments for each card type*/}
                                <Card.Content>
                                    <Card.Header>{data.data.name}</Card.Header>
                                    <Card.Description>
                                        <strong>ALIGNMENT</strong>
                                        <p>{data.data.alignment}</p>
                                        <strong>TYPE</strong>
                                        <p>{data.data.type}</p>
                                        <strong>SIZE</strong>
                                        <p>{data.data.size}</p>
                                        <strong>SPECIAL ABILITIES</strong>
                                        {data.data.special_abilities.map((sa,i) => {
                                            return <p> {sa.name} </p>,
                                            <p>{sa.desc}</p>
                                        })}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
            </Grid>
        </>
    )
}