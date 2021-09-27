
import React, { useEffect } from "react";
import {  Container} from "semantic-ui-react";


import './Activities.css';
import NavBarB from "./NavBarB";
import ActivityDashboard from "./ActivityDashboard";

import LoadingComponents from "../Layout/LoadingComponents";
import { useStore } from "../app/api/Store/Store";
import { observer } from "mobx-react-lite";

 function Activities( ){

const {activityStore}=useStore();




useEffect(() => {
activityStore.loadActivities();
    
}, [activityStore])






if (activityStore.loadingInitial) return <LoadingComponents content='Loading ...'/>
return(

    <div>
           <NavBarB />

            <Container style={{marginTop:'5%'}}>
           
            <ActivityDashboard 
            />
            
               </Container>
           
       
        </div>
)


}
export default observer (Activities);