import React from "react";
import { Button, Card, Form,  Modal } from "semantic-ui-react";
import { HomePageMessages } from "../Model/homepagemessages";


interface Props{
    homepagemessage: HomePageMessages;
    cancelSelectHomepagemessage:()=>void;
}

export default function HomepageDetails({homepagemessage,cancelSelectHomepagemessage}:Props){
 const [open , setOpen] =React.useState(false)
  

    return(<div>
        <Card  id="fixed">
  <Card.Content>
                <Card.Header>{homepagemessage.workName}</Card.Header>
            
            <Card.Meta>
                <span>{homepagemessage.adminName}</span>
                <span>{homepagemessage.date}</span>
                </Card.Meta>
                <Card.Description>
                    {homepagemessage.longDescription}
                    </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group widths='2'>
                            <Button  onClick={()=>setOpen(true)} basic color='blue' content='Sign in'/>
                            <Button onClick={cancelSelectHomepagemessage} basic color='grey' content='Cancel'/>
                        </Button.Group>
                        </Card.Content>
        </Card>
            <Modal onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    >

                    <Modal.Header>
                        Apply For the Job?
                        </Modal.Header>
                        <Modal.Content>
                            <Form>
                                <Form.Group width='2' center>
                                    <Form.Field width='6' >
                                        <label>First Name</label>
                                        <input placeholder='First Name'/>
                                        </Form.Field>
                                        <Form.Field width='6'>
                                        <label>Second Name</label>
                                        <input placeholder='First Name'/>
                                        </Form.Field>
                                </Form.Group>
                                <Form.Group width='2' center>
                                    <Form.Field width='6' >
                                        
                                        <label>Email Name</label>
                                        <input placeholder='First Name'/>
                                        </Form.Field>
                                        <Form.Field width='6' icon='phone'>
                                        <label>Phone Number</label>
                                        <input placeholder='First Name'/>
                                        </Form.Field>
                                        
                                </Form.Group>
                                <Button type='submit' color='green'>Submit</Button>
                                <Button onClick={()=>setOpen(false)} >Cancel</Button>

                                </Form>
                            </Modal.Content>
                </Modal>

                

                </div>
    )
}