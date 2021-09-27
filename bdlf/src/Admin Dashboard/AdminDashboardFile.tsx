
import React from "react";
import { Tab, Container, Header, Form,Card,Image,Button } from "semantic-ui-react";
import NavBarB from "../Activities/NavBarB";
import UserCard from "./UserCard";

export default function AdminDashboardFile(this: any) {
        // const {value}= this.state;
    const panes = [
        {
            menuItem: 'New Users List', render: () => <Tab.Pane className="sizeoftabs">
                <UserCard></UserCard>

                {/* <svg width="923" height="869" viewBox="0 0 923 869" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute svgproperties">
                    <g filter="url(#filter0_f)">
                        <ellipse cx="407.5" cy="434.5" rx="401.5" ry="336.5" fill="#8A55CD" fill-opacity="0.2" />
                    </g>
                    <g filter="url(#filter1_f)">
                        <rect x="330" y="6" width="587" height="857" fill="#AFF0E1" fill-opacity="0.5" />
                    </g>
                    <g filter="url(#filter2_f)">
                        <ellipse cx="422.5" cy="434.5" rx="183.5" ry="166.5" fill="#391F1F" />
                    </g>
                    <g filter="url(#filter3_f)">
                        <rect x="425" y="216" width="216" height="437" fill="#765B5B" fill-opacity="0.5" />
                    </g>
                    <g filter="url(#filter4_f)">
                        <ellipse cx="632" cy="434.5" rx="99" ry="84.5" fill="#151010" fill-opacity="0.4" />
                    </g>
                    <defs>
                        <filter id="filter0_f" x="0" y="92" width="815" height="685" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="filter1_f" x="324" y="0" width="599" height="869" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="filter2_f" x="233" y="262" width="379" height="345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="filter3_f" x="419" y="210" width="228" height="449" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="filter4_f" x="527" y="344" width="210" height="181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg> */}

                <div>

                </div>
            </Tab.Pane>
        },
        { menuItem: 'Admin Lists', render: () => <Tab.Pane className="sizeoftabs">





        </Tab.Pane> },























        { menuItem: 'Waiting for Acceptance', render: () => <Tab.Pane className="sizeoftabs">

<Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
   
   
  </Card.Group>







        </Tab.Pane> },









        {
            menuItem: 'Work List', render: () => <Tab.Pane className="sizeoftabs">
                <div id="divsborder">
            <Header as="h1"> Work Update Form</Header>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input fluid label='Title' placeholder='Title' />
                            <Form.Input fluid label='Admins Publisher Name' placeholder='Write your name' />
                            <Form.Input fluid label='Admins Publisher ID' placeholder='Write your ID...' />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input fluid label='Date Published' placeholder='...' type="date" />
                            <Form.Input fluid label='Due Date' placeholder='...' type="date" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.TextArea label='Work Income Title and important request:' placeholder='Write What is required....' fluid />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.TextArea label='What the Employee wants:' placeholder='Write What is required....' fluid />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.TextArea label='What You have to offer ' placeholder='Write What is required....' fluid />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Importance</label>
                            <Form.Radio
                                label='Not so Important'
                                value='sm'
                            //    checked={value === 'sm'}
                            //     onChange={this.handleChange}check this for tomorrow
                            />
                            <Form.Radio
                                label='Important'
                                value='md'
                                // checked={value === 'md'}
                                // onChange={this.handleChange}
                            />
                            <Form.Radio
                                label='Emergency'
                                value='lg'
                                //  checked={value === 'lg'}
                                // onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </div>






            </Tab.Pane>
        },












        { menuItem: 'Done Work List', render: () => <Tab.Pane className="sizeoftabs">Tab 3 Content</Tab.Pane> },







        {
            menuItem: 'How to use the system', render: () => <Tab.Pane className="sizeoftabs">
                <Container>
                    <Header as='h2' >The Brochure of BDLF</Header>
                    <Header as='h3' >Hello and welcome on the BDLF Admin Dashboard</Header>
                    <p>
                        This is the Admin Dashboard and its currenty in use to check the Admin Lists, Waiting for accptance ,work list, work that has been submited
                        and also to check in the new users .
                        The project is created in need for people to use it in daily basis judging on their skills. The program is very easy to use, doesnt really
                        take much time to learn and get used to it.
                        Sincerly from the creator i hope this project and this application is useful to different people , of different ages . In this project
                        i shall intrestingly enough explain you on short steps how to use this application. Its very easy
                        First You should know that some stuff arent to be clicked our touched unless you get permission from the upperHand. The application
                        has a homepage where all the news to the workers shall go . Peoples who work on the company has the right to check upon their workers work.
                        Here you can submit your paper work due to the time and different occaisons
                    </p>
                    <p>
                        -New User List will show you all the new people who have sign up in the program, it will also show you what they do
                        how they work, what is their amount of time spend on the company or maybe friends they have.
                    </p> <p>   -Admin List shows all the admin that have access on this dashboard, with the access on this dashboard they can check all the data
                        of the workers, Disclaimer the data that is shown is the data that is allowed to be shown to people. Not the data that is not allowed to show with contract
                    </p>
                    <p>
                        - Waiting for accaptence are the new Admin lists that are waiting to get the job or waiting for different occaisons. These site shall be only
                        available for the main admin , or the super admin
                    </p>
                    <p>
                        -Work List is the list where the admin will publish the upcoming work , the can also edit the old ones. Most importantly is that the main work that
                        is published during the fulfilling this form here shall be shown into the homepage
                    </p>
                    <p>
                        -Done work list , will show us the work that has been finished and is going to be checked by the seniors of the company that uses this system
                        This is the last for now
                    </p>
                    <p>
                    </p>
                    <Header as='h4' >Sincerly,</Header>
                    <Header as='h4' >The Creator,</Header>
                    <Header as='h5' >Erestine Bytyqi, 20</Header>
                </Container>


            </Tab.Pane>
        },
    ]

    const TabExampleVerticalTabular = () => (
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

    )






    return (
        <div>
            {/* <NavBarB openForm={handleFormOpen}/> */}
            <div id="testthetestin">

            </div>
            <TabExampleVerticalTabular />



        </div>
    )
}