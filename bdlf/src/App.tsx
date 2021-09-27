
import React ,{useEffect, useState} from 'react'; 
import './App.css';
import axios from 'axios';
import { Activity } from './Model/activity';

function App() {
const [activities , setActivities]=useState<Activity[]>([]);

  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/activities').then (response=>{
      setActivities(response.data);
    })
  },[])


  return (
    <div className="App">
      <h1>hello this is app</h1>
 

        <div id="divside">
          {activities.map(activity=>(
            <p key={activity.id}>
                I have to tell you what is going on according to the plans that we see : {activity.title} will be post poned due to covid {activity.description}
            
           
              {activity.date }
            </p>
          ))}

          
          </div>
               {/* <ul>
          {activities.map((activity:any)=>(
              <li key={activity.id}>
                  In the day of the december on this particular moment the activity {activity.title} will be held upon the wanting of the people
              </li>

          ))}
        </ul> */}
    </div>
  );
}

export default App;
