import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from '../navbar/navbar';
import casestudy from '../pages/casestudy';
import graphic from '../pages/graphic';
import home from '../pages/home';
import ui from '../pages/ui';
import ux from '../pages/ux';
import CaseStudySatu from '../pages/CaseStudy/CaseStudySatu';
import CaseStudyDua from '../pages/CaseStudy/CaseStudyDua';

const routes = () => {
    const RouteWithNavbar = ({exact, path, component}) => {
        return (
            <>
                <Navbar />
                <Route exact={exact} path={path} component={component} />
            </>
        )
    };

return(
    <Router>
            <Switch>
                    <RouteWithNavbar exact path="/" component={home} />
                    <RouteWithNavbar exact path="/casestudy" component={casestudy} />
                    <RouteWithNavbar exact path="/graphic" component={graphic}/>
                    <RouteWithNavbar exact path="/ui" component={ui}/>
                    <RouteWithNavbar exact path="/casestudy/casestudysatu" component={CaseStudySatu}/>
                    <RouteWithNavbar exact path="/casestudy/casestudydua" component={CaseStudyDua}/>
                    <RouteWithNavbar exact path="/ux" component={ux}/>
            </Switch>
        </Router>
    );
}

export default routes;