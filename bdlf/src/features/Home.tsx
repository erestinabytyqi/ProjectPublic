import React from "react";
import { Container } from "semantic-ui-react";
import NavBarB from "../Activities/NavBarB";

export default function Home(){
    return(
        <>
        <NavBarB/>
        <Container style={{marginTop:'7em'}}>
            <h1>Home</h1>
        </Container>
        </>
    )
}