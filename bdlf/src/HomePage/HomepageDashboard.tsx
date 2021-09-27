import React from "react";
import { Grid } from "semantic-ui-react";
import { HomePageMessages } from "../Model/homepagemessages";
import HomepageDetails from "./HomepageDetails";
import HomepageList from "./HomepageList";


interface Props{
    Homepagemessages:HomePageMessages[];
    selectedHomepagemessages: HomePageMessages | undefined;
    selectHomepagemessage:(id:string)=>void;
    cancelSelectHomepagemessage:()=>void;
}
export default function HomepageDashboard({Homepagemessages,selectedHomepagemessages,selectHomepagemessage,cancelSelectHomepagemessage}:Props){



    
    return(
<Grid>
    <Grid.Column width='10'>
        <HomepageList homepagemessages={Homepagemessages} selectHomepagemessage={selectHomepagemessage}   />
    </Grid.Column>
    <Grid.Column width='6'>
        {selectedHomepagemessages &&
        <HomepageDetails homepagemessage={selectedHomepagemessages} cancelSelectHomepagemessage={cancelSelectHomepagemessage} />}
    </Grid.Column>
</Grid>

    )
}