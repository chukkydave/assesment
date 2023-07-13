
import "./App.css"
import TopBar from "./Components/top-nav/Main"
import rssfeed from './assets/rssfeed.png';
import settings from './assets/settings.png';
import bookmark from './assets/bookmark.png';
import videoicon from './assets/videoicon.png';
import location from './assets/location.png';
import pricetag from './assets/pricetag.png';
import image from './assets/image.png';
import smilinglady from './assets/smilinglady.png';
import friendslaughing from './assets/friendslaughing.png';
import { Container, LeftContainer, SwitchAccountContainer, SwitchAccountTitle, SwitchAccountButtons, SwitchAccountButton, Sidebar, SidebarIcon, SidebarItem, SidebarText, Placeholder, CenterContainer, ProfileContainer, ProfileImage, ProfileInfo, ProfileName, ProfileUsername, ProfileDescription, ProfileStats, ProfileStat, ProfileStatValue, ProfileStatLabel, ProfileActionButton, OtherPagesContainer, OtherPagesTitle, RightContainer } from "./styled-components/styled";

function App() {
    return (
        <div className="App">
            <TopBar />
            <Container>'
                <LeftContainer>
                    <SwitchAccountContainer>
                        <SwitchAccountTitle>Switch Account</SwitchAccountTitle>
                        <SwitchAccountButtons>
                            <SwitchAccountButton active>Social</SwitchAccountButton>
                            <SwitchAccountButton>Business</SwitchAccountButton>
                        </SwitchAccountButtons>
                    </SwitchAccountContainer>

                    <Sidebar>
                        <SidebarItem>
                            <SidebarIcon src={rssfeed} alt="rss icon" />
                            <SidebarText active>Feeds</SidebarText>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarIcon src={rssfeed} alt="rss icon" />
                            <SidebarText>Gallery</SidebarText>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarIcon src={settings} alt="settings icon" />
                            <SidebarText>Settings</SidebarText>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarIcon src={rssfeed} alt="rss icon" />
                            <SidebarText>Referral</SidebarText>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarIcon src={bookmark} alt="bookmark icon" />
                            <SidebarText>Saved</SidebarText>
                        </SidebarItem>
                    </Sidebar>

                    <Placeholder />
                </LeftContainer>

                <CenterContainer>
                    <ProfileContainer>
                        <ProfileImage src={smilinglady} alt="smiling lady" />
                        <ProfileInfo>
                            <ProfileName>Rose Kooto</ProfileName>
                            <ProfileUsername>User name</ProfileUsername>
                            <ProfileDescription>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </ProfileDescription>
                        </ProfileInfo>
                        <div>
                            <ProfileStats>
                                <ProfileStat>
                                    <ProfileStatValue>105</ProfileStatValue>
                                    <ProfileStatLabel>Post</ProfileStatLabel>
                                </ProfileStat>
                                <ProfileStat>
                                    <ProfileStatValue>7,080</ProfileStatValue>
                                    <ProfileStatLabel>Followers</ProfileStatLabel>
                                </ProfileStat>
                                <ProfileStat>
                                    <ProfileStatValue>1,500</ProfileStatValue>
                                    <ProfileStatLabel>Following</ProfileStatLabel>
                                </ProfileStat>
                                <ProfileStat>
                                    <ProfileStatValue>1,500</ProfileStatValue>
                                    <ProfileStatLabel>Supporting</ProfileStatLabel>
                                </ProfileStat>
                            </ProfileStats>
                            <ProfileActionButton>Following</ProfileActionButton>
                            <OtherPagesContainer>
                                <OtherPagesTitle>Other Pages</OtherPagesTitle>
                                <OtherPagesTitle>Business One</OtherPagesTitle>
                                <OtherPagesTitle>Business One longer name</OtherPagesTitle>
                                <OtherPagesTitle>Business One</OtherPagesTitle>
                                <OtherPagesTitle>Business One</OtherPagesTitle>
                                <OtherPagesTitle>Business One</OtherPagesTitle>
                            </OtherPagesContainer>
                        </div>
                    </ProfileContainer>

                    <Placeholder />

                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <img src={smilinglady} alt="smiling lady" />
                                    </div>
                                    <div>
                                        <div>
                                            <h4>Rose Kooto</h4>
                                        </div>
                                        <div>
                                            <span>Abuja</span>
                                            <span>11hr ago</span>
                                            <span>200 likes</span>
                                            <span>20 replies</span>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </CenterContainer>

                <RightContainer>
                    <Placeholder />
                    <Placeholder />
                </RightContainer>
            </Container>
        </div>
    );
}

export default App;
