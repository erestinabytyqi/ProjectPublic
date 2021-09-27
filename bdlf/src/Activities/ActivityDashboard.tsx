import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../app/api/Store/Store';

import ActivityList from './ActivityList';
import ActivityDetails from './Details/ActivityDetails';
import ActivitiesForm from './form/ActivitiesForm';





export default observer(function ActivityDashboard(){
    const {activityStore}=useStore();
    const{selectedActivity,editMode}=activityStore;

    return(<Grid>
        <Grid.Column width='10'>
                 <ActivityList/>
                
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity &&
           <ActivityDetails  />
            }
           {editMode &&
          <ActivitiesForm />
        }
        </Grid.Column>
            </Grid>
        )

})