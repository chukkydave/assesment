import React from 'react';
import ParentContainer from '../../styled-components/Parent-Container.js';
import { Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Div10 } from '../../styled-components/Body-Components.js';
import Main from '../Top-Bar/Main';
import SwitchAccount from "../switch-account/Main";
import Feeds from "../Feeds/Main"

function Dashboard() {
    return (
        <ParentContainer>
            <Main />
            <SwitchAccount />
            <Div3></Div3>
            <Div4></Div4>
            <Feeds />
            <Div6></Div6>
            <Div7></Div7>
            <Div8></Div8>
            <Div9></Div9>
            <Div10></Div10>
        </ParentContainer>
    );
}

export default Dashboard;
