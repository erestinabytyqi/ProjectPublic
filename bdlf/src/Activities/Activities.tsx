
import React, { useEffect, useState } from "react";
import { Button, Container} from "semantic-ui-react";
import { Activity } from "../Model/activity";

import './Activities.css';
import NavBarB from "./NavBarB";
import ActivityDashboard from "./ActivityDashboard";
import {v4 as uuid} from 'uuid';
import agent from "../app/api/agent";
import LoadingComponents from "../Layout/LoadingComponents";

 function Activities( ){

const [activities,setActivities]=useState<Activity[]>([]); 
const [selectedActivity,setSelectedActivity]=useState<Activity | undefined>(undefined);
const[editMode,setEditMode]=useState(false);
const [loading,setLoading]=useState(true);
const[submitting,setSubmitting]=useState(false);


useEffect(() => {
    agent.Activities.list().then(response=>{
        let activities : Activity[]=[];
        response.forEach(activity=>{
            activity.date=activity.date.split('T')[0];
            activities.push(activity)
        })
                setActivities(activities);
                setLoading(false);
        console.log(response);
    })
    
}, [])

function handleSelectActivity(id:string){
    setSelectedActivity(activities.find(x=> x.id===id));
}

function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
}

function handleFormOpen(id?:string){
    id ? handleSelectActivity(id) :handleCancelSelectActivity();
    setEditMode(true);
}
 

function handleFormClose(){
    setEditMode(false);
}

function handleCreateorEditActivity(activity:Activity){
    setSubmitting(true);
    if(activity.id){
        agent.Activities.update(activity).then(()=>{
            setActivities([...activities.filter(x=>x.id !== activity.id),activity ])
            setSelectedActivity(activity);
            setEditMode(false);
            setSubmitting(false);
        })
    }else{
        activity.id=uuid();
        agent.Activities.create(activity).then(()=>{
            setActivities([...activities,activity])
            setSelectedActivity(activity);
            setEditMode(false);
            setSubmitting(false);

        })
    }
 
}
function handleDeleteActivity(id:string){
    setSubmitting(true);
    agent.Activities.delete(id).then(()=>{
        setActivities([...activities.filter(x=>x.id!==id)]);
        setSubmitting(false);
    })
  
}

if (loading) return <LoadingComponents content='Loading ...'/>
return(

    <div>
           <NavBarB openForm={handleFormOpen}/>

            <Container style={{marginTop:'5%'}}>
            
            <ActivityDashboard activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateorEditActivity}
            deleteActivity={handleDeleteActivity}
            submitting={submitting}
            />
            
               </Container>
           
       
        </div>
)


}
export default Activities;