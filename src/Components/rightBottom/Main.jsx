import React from 'react';
import {
    Navbar,
    NavItem,
    Icon,
    Button,
    Chief,
    List,
    ListItem,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    Location,
} from "../../styled-components/rightBottom"

import ellipse from "../../img/ellipse-32-1@1x.png"
import bookmark from "../../img/icon-feather-bookmark-2@1x.png"


const SuggestedUsers = () => {
    return (
        <div>
            <Navbar>
                <NavItem>Suggested Users</NavItem>
                <NavItem className="active">Suggested Pages</NavItem>
            </Navbar>
            <Chief>
                <List>
                    <ListItem>
                        <ProfileImage src={ellipse} alt="" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <Location>Abuja</Location>
                        </ProfileInfo>
                        <Button>Support</Button>
                        <Icon src={bookmark} alt="" />
                    </ListItem>
                    <ListItem>
                        <ProfileImage src={ellipse} alt="" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <Location>Abuja</Location>
                        </ProfileInfo>
                        <Button>Support</Button>
                        <Icon src={bookmark} alt="" />
                    </ListItem>
                    <ListItem>
                        <ProfileImage src={ellipse} alt="" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <Location>Abuja</Location>
                        </ProfileInfo>
                        <Button>Support</Button>
                        <Icon src={bookmark} alt="" />
                    </ListItem>
                    <ListItem>
                        <ProfileImage src={ellipse} alt="" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <Location>Abuja</Location>
                        </ProfileInfo>
                        <Button>Support</Button>
                        <Icon src={bookmark} alt="" />
                    </ListItem>
                    <ListItem>
                        <ProfileImage src={ellipse} alt="" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <Location>Abuja</Location>
                        </ProfileInfo>
                        <Button>Support</Button>
                        <Icon src={bookmark} alt="" />
                    </ListItem>
                    <ListItem>
                        <ProfileImage src={ellipse} alt="" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <Location>Abuja</Location>
                        </ProfileInfo>
                        <Button>Support</Button>
                        <Icon src={bookmark} alt="" />
                    </ListItem>
                </List>
            </Chief>
        </div>
    );
};

export default SuggestedUsers;