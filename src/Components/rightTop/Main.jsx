import React from 'react';
import {
    SuggestedListingsContainer,
    Heading,
    Chief,
    List,
    ListItem,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    Location,
    Orders,
    Button,
    Icon,
    ProgressBar,
    ProgressFill,
    OrdersLeft,
} from "../../styled-components/rightTop";
import ellipse from "../../img/ellipse-32-1@1x.png"


const SuggestedListings = () => {
    return (
        <SuggestedListingsContainer>
            <Heading>Suggested Listings</Heading>
            <Chief>
                <List>
                    <div>
                        <ListItem>
                            <ProfileImage src={ellipse} alt="Profile Image" />
                            <ProfileInfo>
                                <ProfileName>Smoothie</ProfileName>
                                <Location>Smoothy store</Location>
                            </ProfileInfo>
                            <Button>Order</Button>
                        </ListItem>
                        <div>
                            <Orders style={{ position: 'relative', left: '4em', bottom: '1.5em' }}>
                                <OrdersLeft>25 orders left</OrdersLeft>
                                <ProgressBar>
                                    <ProgressFill></ProgressFill>
                                </ProgressBar>
                            </Orders>
                        </div>
                    </div>
                    <div>
                        <ListItem>
                            <ProfileImage src={ellipse} alt="Profile Image" />
                            <ProfileInfo>
                                <ProfileName>Smoothie</ProfileName>
                                <Location>Smoothy store</Location>
                            </ProfileInfo>
                            <Button>Order</Button>
                        </ListItem>
                        <div>
                            <Orders style={{ position: 'relative', left: '4em', bottom: '1.5em' }}>
                                <OrdersLeft>25 orders left</OrdersLeft>
                                <ProgressBar>
                                    <ProgressFill></ProgressFill>
                                </ProgressBar>
                            </Orders>
                        </div>
                    </div>
                    <div>
                        <ListItem>
                            <ProfileImage src={ellipse} alt="Profile Image" />
                            <ProfileInfo>
                                <ProfileName>Smoothie</ProfileName>
                                <Location>Smoothy store</Location>
                            </ProfileInfo>
                            <Button>Order</Button>
                        </ListItem>
                        <div>
                            <Orders style={{ position: 'relative', left: '4em', bottom: '1.5em' }}>
                                <OrdersLeft>25 orders left</OrdersLeft>
                                <ProgressBar>
                                    <ProgressFill></ProgressFill>
                                </ProgressBar>
                            </Orders>
                        </div>
                    </div>
                    <div>
                        <ListItem>
                            <ProfileImage src={ellipse} alt="Profile Image" />
                            <ProfileInfo>
                                <ProfileName>Smoothie</ProfileName>
                                <Location>Smoothy store</Location>
                            </ProfileInfo>
                            <Button>Order</Button>
                        </ListItem>
                        <div>
                            <Orders style={{ position: 'relative', left: '4em', bottom: '1.5em' }}>
                                <OrdersLeft>25 orders left</OrdersLeft>
                                <ProgressBar>
                                    <ProgressFill></ProgressFill>
                                </ProgressBar>
                            </Orders>
                        </div>
                    </div>
                    ß
                    {/* Add more list items with orders div */}
                </List>
            </Chief>
        </SuggestedListingsContainer>
    );
};

export default SuggestedListings;
