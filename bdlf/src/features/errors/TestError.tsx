import axios from "axios";
import React  from "react";
import { Button, Header, Segment } from "semantic-ui-react";


export default function TestError(){
    const baseUrl =' http://localhost:5000/'

    function handleNotFound(){
        axios.get(baseUrl + 'buggy/not-found').catch(err=>console.log(err.response))
    }

    function handleBadRequest(){
        axios.get(baseUrl + 'buggy/bad-request').catch(err=>console.log(err.response))
    }
    function handleServerError(){
        axios.get(baseUrl + 'buggy/server-error').catch(err=>console.log(err.response))
    }
    function handleUnathorised(){
        axios.get(baseUrl + 'buggy/unauthorised').catch(err=>console.log(err.response))
    }
    function handleBadGuid(){
        axios.get(baseUrl + 'buggy/notaguid').catch(err=>console.log(err.response))
    }
    function handleValidationError(){
        axios.post(baseUrl + 'activities', {}).catch(err=> console.log(err));
    }
    return(
        <>
        <Header as= 'h1' content='Test Error Component'> 
            <Segment>
                <Button onClick={handleNotFound} content='Not Found' basic primary />
                <Button onClick={handleBadRequest} content='Bad Request' basic primary />
                <Button onClick={handleValidationError} content='Validation Error' basic primary />
                <Button onClick={handleServerError} content='Server Error' basic primary />
                <Button onClick={handleUnathorised} content='Unauthorised' basic primary />
                <Button onClick={handleBadGuid} content='Bad Guid' basic primary />
            </Segment>
        </Header>
        </>
    )
}