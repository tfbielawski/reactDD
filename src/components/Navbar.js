import React from "react";
import {Menu, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";

//Navbar function
export default function Navbar() {
    return (
        //Semantic Menu
        <Menu inverted>
            {/*Semantic Container*/}
            <Container>
                {/*Link to home*/}
                <Link to = "/">
                    <Menu.Item name = "Fantasy Generator Home"></Menu.Item>
                </Link>
                {/*Link to people*/}
                <Link to= "/monster">
                    <Menu.Item name = "Monster Generator"></Menu.Item>
                </Link>
                {/*Link to classes*/}
                <Link to = "/classes">
                    <Menu.Item name = "Classes"></Menu.Item>
                </Link>
            </Container>
        </Menu>
    )
}