import React from "react";
import { Button, Card } from "semantic-ui-react";
import { useStore } from "../../app/api/Store/Store";
import LoadingComponents from "../../Layout/LoadingComponents";
import { Activity } from "../../Model/activity";

export default function ActivityDetails(){
    const{activityStore}=useStore();
    const{selectedActivity: activity,openForm, cancelSelectedActivity}=activityStore;
if(!activity) return <LoadingComponents/>;
    return(
        <Card fluid >
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
            
            <Card.Meta>
                <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                    </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group widths='2'>
                            <Button onClick={()=>openForm(activity.id)}basic color='blue' content='Edit'/>
                            <Button onClick={cancelSelectedActivity}basic color='grey' content='Cancel'/>
                        </Button.Group>
                        </Card.Content>
            </Card>
    )
}