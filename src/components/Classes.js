import React from "react";
import { Card, Grid } from "semantic-ui-react";

//People function definition, pass in data from App.js
export default function Classes(data) {
    return (
        <>
            <h1> Classes </h1>
            <button> GET CLASS</button>
            <Grid columns={3}>
                {/* Map over data passed in from App.js
                   For each character class in data, return a grid card*/}
                <Grid.Column>
                    <Card>
                        {/*Add comments for each card type*/}
                        <Card.Content>
                            <Card.Header>{data.data.name}</Card.Header>
                            <Card.Description>
                                <strong>HIT DIE</strong>
                                <p>{data.data.hit_die}</p>
                                <strong>Weapon Proficiencies</strong>
                                {/*Map over weapons array, populate*/}
                                {data.data.proficiencies.map((p, i) => {
                                    return <p> {p.index} </p>;
                                })}

                                {/*/ if speccasting is true, map. Else, <NA>
                                !*Map over spellcasting array, populate*!/*/}
                                <strong>SpellCasting Proficiencies</strong>
                                {data.data.spellcasting ? (
                                    data.data.spellcasting.info.map((s) => {
                                        return (<p> {s.desc} </p>), (<p>{s.name}</p>);
                                    })
                                ) : (
                                    <p>No spellcasting ability</p>
                                )}

                                {/*Map over weapons array, populate*/}
                                <strong>Subclasses</strong>
                                {data.data.subclasses.map((sc) => {
                                    return <p> {sc.name} </p>;
                                })}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </>
    );
}
