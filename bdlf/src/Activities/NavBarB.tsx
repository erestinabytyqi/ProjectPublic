import React from "react";
import {  Button, Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Activity } from "../Model/activity";
interface Props{
        openForm:()=>void;
    }
export default function NavBarB({openForm}:Props){

    return(
        <Menu inverted fixed='top'>
                <Container>

            <Menu.Item header>
              BDLF 
            </Menu.Item>
    <Link to="/homepage">    <Menu.Item name='HomePage'>

            </Menu.Item></Link>
     <Link to="/profile">       <Menu.Item name='Profile'>

            </Menu.Item></Link>
       <Link to="/activitiies">     <Menu.Item name='Activities'>

            </Menu.Item></Link>
            <Link to="/admindashboard">     <Menu.Item name='Dashboard'>

            </Menu.Item></Link>
            <Button primary onClick={openForm} content="Create Activity"/>
                    </Container>


            </Menu>
    )
}