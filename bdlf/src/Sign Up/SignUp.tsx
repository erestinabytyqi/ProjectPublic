import { Form } from 'semantic-ui-react'
import './Signup.css'
import React from "react"
export default function SignUp() {
    return (<div>
            <div id="positionabsolute">
            <a href="./applyadmin">   <h4 id="subtitlestyle">  Apply for Admin?</h4></a>
                </div>
        <div>
        <svg width="748" height="791" viewBox="0 0 748 791" fill="none" xmlns="http://www.w3.org/2000/svg" id="positionofthesvbgbackground">
<ellipse cx="330" cy="395.5" rx="330" ry="312.5" fill="#CD5555" fill-opacity="0.2"/>
<rect x="265" width="483" height="791" fill="#F0AFAF" fill-opacity="0.5"/>
<ellipse cx="341.5" cy="395" rx="150.5" ry="147" fill="#391F1F"/>
<rect x="342" y="200" width="182" height="391" fill="#765B5B" fill-opacity="0.5"/>
<ellipse cx="514" cy="395.5" rx="81" ry="81.5" fill="#151010" fill-opacity="0.4"/>
</svg>

        </div>
        <div id="formgroupsignup">
            <div id="titile">
            <h1 id="titlestyle">Sign up </h1>
            <a href="./loginbdlf">    <h3 id="subtitlestyle">  or already have an account?</h3></a>
                <h4 id="styleforsubsubtitle">BDLF</h4>
                </div>
            <Form>
                <Form.Group>
                    <Form.Input label='First Name' placeholder='First Name' width={9} />
                    <Form.Input label='Last Name' placeholder='Last Name' width={9} />
                  
                </Form.Group>
                <Form.Group>
                    <Form.Input label='Email Address' placeholder='Email Address' width={9} />
                    <Form.Input label='Password' placeholder='Password' width={9} type='password' />
                    <Form.Input label='City' placeholder='City ' width={9} />
                </Form.Group>
                <Form.Group>
                    <Form.Input label=' Address' placeholder='Your Address' width={9} />
                    <Form.Input label=' Zip Code' placeholder='Zip Code' width={9} />
                   
                </Form.Group>
                <Form.Group>
                    <Form.Checkbox
                        inline
                        label='I agree to the terms and conditions'
                        required />
                </Form.Group>
                <Form.Group>
                    <Form.Button floated='right'>
                        Sign Up
                    </Form.Button>
                </Form.Group>
            </Form>
        </div>

    </div>)
}