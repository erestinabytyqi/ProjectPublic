
import React from 'react';
import loginvsec from './Log in/loginvsec';
import App from './App';
import SignUp from './Sign Up/SignUp';

import ApplyAdmin from './Admin Apply/ApplyAdmin';
import AdminDashboardFile from './Admin Dashboard/AdminDashboardFile';
import TabExampleVerticalTabular from './Admin Dashboard/TabVeritcal';
import UserCard from './Admin Dashboard/UserCard';
import Profile from './Profile Dashboard/Profile';
import HomePage from './HomePage/HomePage';
import Activities from './Activities/Activities';
import ActivityDashboard from './Activities/ActivityDashboard';
import ActivitiesForm from './Activities/form/ActivitiesForm';
import TestError from './features/errors/TestError';
import Home from './features/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function Navigation() {
    return (
        <Router>
            <ToastContainer position='bottom-right' hideProgressBar/>
            <Switch>
            
                 <Route exact path='/' component={HomePage}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/usercard' component={UserCard}/>
                <Route path='/app' component={App} />
                <Route path='/signupbdlf' component={SignUp} />
                <Route path='/loginbdlf' component={loginvsec} />
                <Route path='/applyadmin' component={ApplyAdmin} />
                <Route path='/admindashboard' component={AdminDashboardFile}/>
                <Route path='/tabexample' component={TabExampleVerticalTabular}/>
                <Route path='/activitiies' component={Activities}/>
                <Route path='/activitydashboard' component={ActivityDashboard}/> 
                <Route path='/createactivity' component={ActivitiesForm}/>
                <Route path='/home' component={Home}></Route>
                <Route path='/testerror' component={TestError}></Route>
            </Switch>
        </Router>
    )

}
export default Navigation;