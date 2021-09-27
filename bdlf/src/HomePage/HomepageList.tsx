import React from "react";
import { Button, Item,  Label, Segment } from "semantic-ui-react";
import { HomePageMessages } from "../Model/homepagemessages";


interface Props{
    homepagemessages:HomePageMessages[];
    selectHomepagemessage:(id:string)=>void;
}
export default function HomepageList({homepagemessages,selectHomepagemessage}:Props){



    return(
       <Segment>
           <Item.Group>
            {homepagemessages.map(homepagemessage=>(
                <Item key={homepagemessage.id}>
                    <Item.Content>
                        <Item.Header as='a'>
                            {homepagemessage.workName}
                        </Item.Header>

                        <Item.Meta>{homepagemessage.adminName}</Item.Meta>
                        <Item.Meta>{homepagemessage.date}</Item.Meta>
                        <Item.Description>
                            <div>{homepagemessage.shortDescription}</div>
                            <div><Label icon='globe' content={homepagemessage.remote}/><Label icon='exclamation triangle'content={homepagemessage.urgent}/></div>
                        </Item.Description>
                    <Item.Extra>
                        <Button onClick={()=>selectHomepagemessage(homepagemessage.id)} floated='right' content = 'View' color='blue'/>
                    </Item.Extra>

                    </Item.Content>


                </Item>
            ))}




           </Item.Group>




       </Segment>




)
                         




                            
}