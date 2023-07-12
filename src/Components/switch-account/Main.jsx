import React, { useState } from 'react'
import { Div2, NavContainer, NavPill } from '../../styled-components/Body-Components.js'
import messageIcon from "../../img/path-106@1x.png"
import yellowCircle from "../../img/path-161@1x.png"


function Main() {

    const [activePill, setActivePill] = useState(0);

    const handlePillClick = (index) => {
        setActivePill(index);
    };
    return (
        <Div2>

            <div className='title'>Switch Account</div>
            <NavContainer>
                <NavPill active={activePill === 0} onClick={() => handlePillClick(0)}>
                    Social
                </NavPill>
                <NavPill active={activePill === 1} onClick={() => handlePillClick(1)}>
                    Business
                </NavPill>
            </NavContainer>
        </Div2>
    )
};

export default Main;