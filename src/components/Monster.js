import React from "react";
import { Card, Grid } from "semantic-ui-react";
//indent, align, comments, consoles
//make cards more informative
//add races
//add "get" buttons
//create export qgetAMonster()- it contains axios calls
//useEffect(()=>{},[monster])
//onClick={()=>getAMoster()}

//Monster function definition, pass in data from App.js
export default function Monster(data) {
    return (
        <>
            <h1> Monster </h1>
            <button> GET MONSTER </button>
            <Grid columns={3}>
                {/* Map over data passed in from App.js
                   For each monster in data, return a grid card*/}
                <Grid.Column>
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
                                {/*Map over special abilities array, populate*/}
                                {data.data.special_abilities ? (
                                    data.data.special_abilities.map((sa, i) => {
                                        return (<p> {sa.name} </p>), (<p> {sa.desc}</p>);
                                    })
                                ) : (
                                    <p>None</p>
                                )}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </>
    );
}
