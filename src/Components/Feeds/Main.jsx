import React, { useState } from 'react'
import { Div5, NavContainer, Text, ListContainer, ListItem, Icon } from '../../styled-components/Body-Components.js'
import messageIcon from "../../img/path-106@1x.png"
import yellowCircle from "../../img/path-161@1x.png";
import feeds from "../../img/settings-24px@1x.png"
import settings from "../../img/rss-feed-24px@1x.png"
import feeds from "../../img/icon-awesome-images@1x.png"
import feeds from "../../img/icon-feather-bookmark-1@1x.png"
import feeds from "../../img/icon-ionic-md-share-alt-1@1x.png"

function Main() {
    const items = [
        { text: 'Item 1', iconUrl: '/path-to-icon-1.png' },
        { text: 'Item 2', iconUrl: '/path-to-icon-2.png' },
        { text: 'Item 3', iconUrl: '/path-to-icon-3.png' },
    ];
    return (
        <Div5>

            <ListContainer>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <Icon src={item.iconUrl} alt="Icon" />
                        <Text>{item.text}</Text>
                    </ListItem>
                ))}
            </ListContainer>
        </Div5>
    )
};

export default Main;