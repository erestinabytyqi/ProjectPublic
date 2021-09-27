import React from "react"
import { Form ,Button} from "semantic-ui-react";
import './login.css';
export default function loginvsec() {




console.log('hello');





    return (<div>
         <div id="positionabsolute">
            <a href="./applyadmin">   <h4 id="subtitlestyle">  Apply for Admin?</h4></a>
                </div>
        <div>
        <svg width="715" height="791" viewBox="0 0 715 791" fill="none" xmlns="http://www.w3.org/2000/svg" id="svgposition">
<ellipse cx="330" cy="400.5" rx="330" ry="312.5" fill="#CD5555"/>
<rect x="232" width="483" height="791" fill="#F0AFAF"/>
<ellipse cx="308.5" cy="395" rx="150.5" ry="147" fill="#391F1F"/>
<rect x="309" y="200" width="182" height="391" fill="#765B5B"/>
<ellipse cx="491" cy="395.5" rx="81" ry="81.5" fill="#151010"/>
</svg>


         </div>

        <div id="formposition">
            <div id="divside">
                <h1 id="titlestyle">Sign in </h1>
               <a href="./signupbdlf"> <h3 id="subtitlestyle">  or create an account?</h3></a>
                <h4 id="styleforsubsubtitle">BDLF</h4>
                
            </div>
            <Form id="marginofform">
                <Form.Field>
                    <label>
                        User Name
                    </label>
                    <input placeholder="User Name" required />
                </Form.Field>
                <Form.Field>
                    <label>
                        Password
                    </label>
                    <input type="password" placeholder="Password" required />
                </Form.Field>
                <Button type='submit'>Log in</Button>
            </Form>
        </div>
        </div>
    )
}