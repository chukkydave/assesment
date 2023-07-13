import "./style.css";
import rssfeed from "./assets/rssfeed.png";
import settings from "./assets/settings.png";
import bookmark from "./assets/bookmark.png";
import videoicon from "./assets/videoicon.png";
import location from "./assets/location.png";
import pricetag from "./assets/pricetag.png";
import image from "./assets/image.png";
import smilinglady from "./assets/smilinglady.png";
import friendslaughing from "./assets/friendslaughing.png";
import TopBar from "./Components/top-nav/Main"
import BottomRight from "./Components/rightBottom/Main"
import RightTop from "./Components/rightTop/Main"
import { Container, LeftContainer, SwitchAccountContainer, SwitchAccountTitle, SwitchAccountButtons, SwitchAccountButtonO, SwitchAccountButtonT, Sidebar, SidebarIcon, SidebarItem, SidebarText, Placeholder, CenterContainer, ProfileContainer, ProfileImage, ProfileInfo, ProfileName, ProfileUsername, ProfileDescription, ProfileStats, ProfileStat, ProfileStatValue, ProfileStatLabel, ProfileActionButton, OtherPagesContainer, OtherPagesTitle, RightContainer } from "./styled-components/styled";



export default function App() {
  return (

    <>
      <TopBar />
      <Container
        className="App"
      >
        {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}

        {/* left */}

        <LeftContainer>
          <SwitchAccountContainer>
            <SwitchAccountTitle>
              Switch Account
            </SwitchAccountTitle>
            <div>
              <SwitchAccountButtonO>
                Social
              </SwitchAccountButtonO>
              <SwitchAccountButtonT>
                Business
              </SwitchAccountButtonT>
            </div>
          </SwitchAccountContainer>

          <Sidebar>
            <SidebarItem>
              <SidebarIcon src={rssfeed}
                alt="rss icon">
              </SidebarIcon>
              <SidebarText
              >
                Feeds
              </SidebarText>
            </SidebarItem>

            <SidebarItem>
              <SidebarIcon src={rssfeed}
                alt="rss icon">
              </SidebarIcon>
              <SidebarText>
                Gallery
              </SidebarText>
            </SidebarItem>

            <SidebarItem>
              <SidebarIcon src={settings}
                alt="rss iconn">
              </SidebarIcon>
              <SidebarText>
                Settings
              </SidebarText>
            </SidebarItem>

            <SidebarItem>
              <SidebarIcon src={rssfeed}
                alt="rss icon">
              </SidebarIcon>
              <SidebarText>
                Referral
              </SidebarText>
            </SidebarItem >

            <SidebarItem>
              <SidebarIcon src={bookmark}
                alt="rss icon">
              </SidebarIcon>
              <SidebarText>
                Saved
              </SidebarText>
            </SidebarItem >
          </Sidebar >

          <div
            style={{
              height: "368px",
              background: "#FFF 0% 0% no-repeat padding-box",
              borderRadius: "16px"
            }}
          ></div>
        </LeftContainer >

        {/* centre */}
        < CenterContainer>
          <ProfileContainer>
            <ProfileImage src={smilinglady} alt="smiling lady" />
            <ProfileInfo>
              <ProfileName>Rose Kooto</ProfileName>
              <ProfileUsername>User name</ProfileUsername>
              <ProfileDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </ProfileDescription>
            </ProfileInfo>

            <div
              style={{
                paddingLeft: "18px"
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "0 30px",
                  gridTemplateColumns: "31px 41px 44px  44px"
                }}
              >
                <div
                  style={{
                    display: "grid",
                    marginBottom: "21px"
                  }}
                >
                  <span
                    style={{
                      lineHeight: "24px",
                      fontSize: "20px",
                      letterSpacing: 0,
                      color: "#490057",
                      opacity: 1,
                      fontWeight: 600
                    }}
                  >
                    105
                  </span>
                  <span
                    style={{
                      lineHeight: "12px",
                      fontSize: "16px",
                      letterSpacing: 0,
                      color: "#787878",
                      opacity: 1
                    }}
                  >
                    Post
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    marginBottom: "21px"
                  }}
                >
                  <span
                    style={{
                      lineHeight: "24px",
                      fontSize: "20px",
                      letterSpacing: 0,
                      color: "#490057",
                      opacity: 1,
                      fontWeight: 600
                    }}
                  >
                    7,080
                  </span>
                  <span
                    style={{
                      lineHeight: "12px",
                      fontSize: "16px",
                      letterSpacing: 0,
                      color: "#787878",
                      opacity: 1
                    }}
                  >
                    Followers
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    marginBottom: "21px"
                  }}
                >
                  <span
                    style={{
                      lineHeight: "24px",
                      fontSize: "20px",
                      letterSpacing: 0,
                      color: "#490057",
                      opacity: 1,
                      fontWeight: 600
                    }}
                  >
                    1,500
                  </span>
                  <span
                    style={{
                      lineHeight: "12px",
                      fontSize: "16px",
                      letterSpacing: 0,
                      color: "#787878",
                      opacity: 1
                    }}
                  >
                    Following
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    marginBottom: "21px"
                  }}
                >
                  <span
                    style={{
                      lineHeight: "24px",
                      fontSize: "20px",
                      letterSpacing: 0,
                      color: "#490057",
                      opacity: 1,
                      fontWeight: 600
                    }}
                  >
                    1,500
                  </span>
                  <span
                    style={{
                      lineHeight: "12px",
                      fontSize: "16px",
                      letterSpacing: 0,
                      color: "#787878",
                      opacity: 1
                    }}
                  >
                    Supporting
                  </span>
                </div>
              </div>
              <button
                style={{
                  width: "119px",
                  height: "29px",
                  /* UI Properties */
                  background: "#490057 0% 0% no-repeat padding-box",
                  borderRadius: "15px",
                  opacity: "1",
                  color: "#FFF",
                  lineHeight: "12px",
                  border: "none",
                  marginBottom: "28px"
                }}
              >
                Following
              </button>
              <div
                style={{
                  display: "grid"
                }}
              >
                <h5
                  style={{
                    lineHeight: "20px",
                    margin: 0,
                    fontWeight: "normal",
                    color: "#490057"
                  }}
                >
                  Other Pages
                </h5>
                <h5
                  style={{
                    lineHeight: "20px",
                    margin: 0,
                    fontWeight: "normal",
                    color: "#490057"
                  }}
                >
                  Business One
                </h5>
                <h5
                  style={{
                    lineHeight: "20px",
                    margin: 0,
                    fontWeight: "normal",
                    color: "#490057"
                  }}
                >
                  Business One longer name
                </h5>
                <h5
                  style={{
                    lineHeight: "20px",
                    margin: 0,
                    fontWeight: "normal",
                    color: "#490057"
                  }}
                >
                  Business One
                </h5>
                <h5
                  style={{
                    lineHeight: "20px",
                    margin: 0,
                    fontWeight: "normal",
                    color: "#490057"
                  }}
                >
                  Business One
                </h5>
                <h5
                  style={{
                    lineHeight: "20px",
                    margin: 0,
                    fontWeight: "normal",
                    color: "#490057"
                  }}
                >
                  Business One
                </h5>
              </div>
            </div>
          </ProfileContainer>

          <div
            style={{
              height: "180px",
              background: "#FFF 0% 0% no-repeat padding-box",
              borderRadius: "19px",
              border: "1px solid #49005730",
              padding: "37px 31px 23px 34px",
              display: "grid",
              alignContent: "space-between"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 123px",
                gap: "40px",
                color: "#490057"
              }}
            >
              <input
                style={{
                  border: "1px solid #70707078",
                  borderRadius: "29px",
                  height: "52px",
                  padding: "14px 32px"
                }}
                placeholder="Share your Moments"
              />
              <button
                style={{
                  background: "#490057 0% 0% no-repeat padding-box",
                  color: "#FFF",
                  fontSize: "20px",
                  lineHeight: "27px",
                  borderRadius: "26px",
                  border: "none"
                }}
              >
                Post
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                width: "411px"
              }}
            >
              <div>
                <span>
                  <img
                    style={{ width: "25px", height: "19px" }}
                    src={image}
                    alt="icon"
                  />
                </span>
                <span
                  style={{
                    color: "#393939",
                    letterSpacing: 0,
                    lineHeight: "27px",
                    /* UI Properties */
                    font: "20px",
                    opacity: 1,
                    marginLeft: "10px"
                  }}
                >
                  Image
                </span>
              </div>

              <div>
                <span>
                  <img
                    style={{ width: "25px", height: "17" }}
                    src={videoicon}
                    alt="video icon"
                  />
                </span>
                <span
                  style={{
                    color: "#393939",
                    letterSpacing: 0,
                    lineHeight: "27px",
                    /* UI Properties */
                    font: "20px",
                    opacity: 1,
                    marginLeft: "10px"
                  }}
                >
                  Videos
                </span>
              </div>

              <div>
                <span>
                  <img
                    style={{ width: "15px", height: "21px" }}
                    src={location}
                    alt="location icon"
                  />
                </span>
                <span
                  style={{
                    color: "#393939",
                    letterSpacing: 0,
                    lineHeight: "27px",
                    /* UI Properties */
                    font: "20px",
                    opacity: 1,
                    marginLeft: "10px"
                  }}
                >
                  Location
                </span>
              </div>

              <div>
                <span>
                  <img
                    style={{ width: "16px", height: "16px" }}
                    src={pricetag}
                    alt="price tag"
                  />
                </span>
                <span
                  style={{
                    color: "#393939",
                    letterSpacing: 0,
                    lineHeight: "27px",
                    /* UI Properties */
                    font: "20px",
                    opacity: 1,
                    marginLeft: "10px"
                  }}
                >
                  Tags
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "388px",
              background: "#FFF 0% 0% no-repeat padding-box",
              borderRadius: "28px",
              // background: "red",
              padding: "26px 49px 28px 24px",
              gap: "24px",
              display: "grid",
              gridTemplateColumns: "auto 1fr"
            }}
          >
            <div>
              <img
                style={{
                  width: "473px",
                  height: "334px"
                }}
                src={friendslaughing}
                alt="friends laughing"
              />
            </div>

            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "16px"
                }}
              >
                <img src={smilinglady} alt="smiling lady" />
                <div>
                  <div>
                    <h4>Rose Kooto</h4>
                  </div>
                  <div
                    style={{
                      display: "inline-grid",
                      gap: "27px",
                      gridTemplateColumns: "28px 56px 64px 64px"
                    }}
                  >
                    <span
                      style={{
                        lineHeight: "15px",
                        fontSize: "16px",
                        letterSpacing: 0,
                        color: "#787878",
                        opacity: 1
                      }}
                    >
                      Abuja
                    </span>
                    <span
                      style={{
                        lineHeight: "15px",
                        fontSize: "16px",
                        letterSpacing: 0,
                        color: "#787878",
                        opacity: 1
                      }}
                    >
                      11hr ago
                    </span>
                    <span
                      style={{
                        lineHeight: "15px",
                        fontSize: "16px",
                        letterSpacing: 0,
                        color: "#787878",
                        opacity: 1
                      }}
                    >
                      200 likes
                    </span>
                    <span
                      style={{
                        lineHeight: "15px",
                        fontSize: "16px",
                        letterSpacing: 0,
                        color: "#787878",
                        opacity: 1
                      }}
                    >
                      20 replies
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </CenterContainer>

        {/* right */}
        < div
          style={{
            // background: "white",
            height: "100vh",
            display: "grid",
            gap: "72px"
          }}
        >
          <RightTop />

          <BottomRight />
        </div >
      </Container >
    </>
  );
}

// 260 1fr 329
