
import React from "react"
import { Button, Form, Modal, Header } from "semantic-ui-react";
import './adminapply.css';
export default function ApplyAdmin() {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
           
            <div id="postionofsvg">
            <svg width="947" height="1139" viewBox="0 0 947 1139" fill="none" xmlns="http://www.w3.org/2000/svg" id="positionoffsvg">
<rect width="631" height="1139" fill="#C4C4C4"/>
<ellipse cx="465" cy="552.5" rx="407" ry="353.5" fill="#CD5555"/>
<rect x="344" y="104" width="603" height="884" fill="#F0AFAF"/>
<ellipse cx="442.5" cy="546" rx="188.5" ry="170" fill="#391F1F"/>
<rect x="435" y="322" width="241" height="448" fill="#765B5B"/>
<ellipse cx="668" cy="546" rx="98" ry="88" fill="#151010"/>
</svg>


            </div>
        
        <div id="sizepfform">
        <div id="divside">
                <h1 id="titlestyle">Apply for admin </h1>
             <a href="./loginbdlf">   <h3 id="subtitlestyle">  or join as a user?</h3></a>
                <h4 id="styleforsubsubtitle">BDLF</h4>
                
            </div>
            <Form id="formstyleupmargin">
                <Form.Group>
                    <Form.Input label='First Name' placeholder='Joe' width={9} required />
                    <Form.Input label='Last Name' placeholder='Snith' width={9} required />
                    <Form.Input label='Address' placeholder='Mother Teresa 32 Kosovo' width={9} required />
                </Form.Group>
                <Form.Group>
                    
                    <Form.Input label='Street Name' placeholder='Str.Mother Teresas' width={9} required />
                    <Form.Input label='Number Code' placeholder='12320' width={9} />
                    <Form.Input label='City' placeholder='Malisheve' width={9} />
                    <Form.Input label='Country' placeholder='Kosovo' width={9} />
                </Form.Group>
                <Form.Group>
                    <Form.Input label='Gender Identity' placeholder='First Name' width={9} />
                    <Form.Input label='Bithdate' type="date" placeholder='First Name' width={9} />
                    <Form.Input label='Mayor' placeholder='First Name' width={9} />
                </Form.Group>
                <Form.Group>
                    <Form.Input label='Email Adress' placeholder='First Name' width={9} />
                    <Form.Input label='Password' type="Password" placeholder='First Name' width={9} />
                    <Form.Input label='2 Email Address' placeholder='Your Second email adress' width={9} />
                    <Form.Input label='Phone Number' placeholder='Phone Number' width={9} />
                </Form.Group>
                <Form.Group>
                    <Form.Checkbox label="I agree to the Terms and Conditions" />


                </Form.Group>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button> Submit </Button>}
                >
                    <Modal.Header>These are Your Information?</Modal.Header>
                    <Modal.Content image>

                        <Modal.Description>
                            <Header>Appliance Information</Header>
                            <p>
                                Your First Name is Joe, Your LastName is Smith, and you come from Kosovo ,
                                <p> Your address is Str Mother Teresa 24,</p>
                                Your Email Address is JoeSmith@Gnail.com.
                            </p>
                            <p>Are you sure u want to proccede</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => setOpen(false)}>
                            Nope
                        </Button>
                        <Button
                            content="Yes, i want to!"
                            labelPosition='right'
                            icon='checkmark'
                            onClick={() => setOpen(false)}
                            positive
                        />
                    </Modal.Actions>
                </Modal>


            </Form>
        </div>
        </div>
    )
}