import React from "react";
import {Card, Grid} from "semantic-ui-react";

//People function definition, pass in data from App.js
export default function Classes( data) {
    return (
        <>
            <h1> Classes </h1>
            <Grid columns = {3}>
                {/* Map over data passed in from App.js
                   For each character class in data, return a grid card*/}
                <Grid.Column >
                    <Card>
                        {/*Add comments for each card type*/}
                        <Card.Content>
                            <Card.Header>{data.data.name}</Card.Header>
                            <Card.Description>
                                <strong>HIT DIE</strong>
                                <p>{data.data.hit_die}</p>
                                <strong>Weapon Proficiencies</strong>
                                {/*Map over weapons array, populate*/}
                                {data.data.proficiencies.map((p,i) => {
                                    return <p> {p.name} </p>
                                })}
                                <strong>SpellCasting Proficiencies</strong>
                                {/*/ if speccasting is true, map. Else, <NA>
                                !*Map over spellcasting array, populate*!/*/}
                                {/*{data.data.spellcasting.info.map((s,i) => {*/}
                                {/*    return <p> {s.desc} </p>,*/}
                                {/*    <p>{s.name}</p>*/}
                                {/*})}*/}
                                <strong>Subclasses</strong>
                                {/*Map over weapons array, populate*/}
                                {data.data.subclasses.map((sc,i) => {
                                    return <p> {sc.name} </p>
                                })}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </>
    )
}