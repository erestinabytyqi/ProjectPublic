
import React, { useEffect, useState } from "react";
import {Container } from "semantic-ui-react";
import './homepage.css';
// import  casey from './casey.jpg';
// import Capture from './Capture.png';
import axios from "axios";
import { HomePageMessages } from "../Model/homepagemessages";
import NavBarB from "../Activities/NavBarB";
import HomepageDashboard from "./HomepageDashboard";



 function HomePage(){

    const [homepagemessages,setHomepagemessages]=useState<HomePageMessages[]>([]);
    const [selectedHomepagemessages,setSelectedHomepagemessages]=useState<HomePageMessages | undefined>(undefined);
    

    useEffect(()=>{
        axios.get<HomePageMessages[]>('http://localhost:5000/HomePagemessages').then(response=>{
            console.log(response);
            setHomepagemessages(response.data);
        })
    },[])

    function handleSelectHomepagemessage(id:string){
        setSelectedHomepagemessages(homepagemessages.find(y=>y.id===id));
    }

    function handleCancelSelectActivity(){
        setSelectedHomepagemessages(undefined);
    }

    return(
     <div>
        {/* <NavBarB/>  */}
        <Container style={{marginTop:'5%'}}>
        <HomepageDashboard Homepagemessages={homepagemessages}
        selectedHomepagemessages={selectedHomepagemessages}
        selectHomepagemessage={handleSelectHomepagemessage}
        cancelSelectHomepagemessage={handleCancelSelectActivity}
        />
           </Container>


           </div>
        
            
           
    )
}
export default HomePage;