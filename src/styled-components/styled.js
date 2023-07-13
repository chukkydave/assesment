import { styled } from "styled-components";

export const TopNav = styled.div`
    top: 0px;
    left: 0px;
    width: 1848px;
    height: 263px;
    background: transparent linear-gradient(267deg, #A303A0 0%, #490057 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 0px 0px 35px 35px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 60px;
`;

export const LeftSide = styled.div`
  display: grid;
 grid-template-columns: auto auto;
  align-items: center;
  justify-content:start;

  .dp{ 
    grid-area:1/1/2/2;
    width: 82px;
    height: 82px;
    margin-right: 4px;
    margin-left:30px;
    }
    .icon{
        grid-area: 1 / 2 / 2 / 3;
        top: 147px;
        left: 221px;
        width: 15px;
        height: 8px;
    }
    .name{
        grid-area: 1 / 3 / 2 / 4;
        color:white;
    }
`;

export const RightSide = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.2fr) 0.5fr 0.2fr;
    grid-column-gap: 20px;
    align-items: center;

  .usa{
    grid-area: 1 / 1 / 2 / 2;
    top: 147px;
    left: 1014px;
    width: 43px;
    height: 23px;
  }

  div{
    display:grid;
.img{
    width: 35px;
    height: 31px;
    position: relative; 
  }
  .badge{
    width: 27px;
    height: 26px;
    /* UI Properties */
    background: #FBB03B 0% 0% no-repeat padding-box;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    right: 21em;
  }
  }

  
`;

export const Container = styled.div`
  display: grid;
  gap: 67px;
  grid-template-columns: 260px 1fr 329px;
  background: #f3f3f3;
  padding-left: 140px;
  padding-right: 69px;
  max-width: 1848px;
  margin: auto;
`;

export const LeftContainer = styled.div`
  display: grid;
  gap: 117px;
  height: 100vh;
`;

export const SwitchAccountContainer = styled.div`
  display: grid;
  height: 113px;
  background: #fff;
  border-radius: 10px;
  opacity: 1;
  padding: 11px 13px 14px 17px;
  align-items: center;
`;

export const SwitchAccountTitle = styled.div`
  display: grid;
  width: 135px;
  height: 27px;
  text-align: left;
  font-size: 16px;
  letter-spacing: 0;
  color: #490057;
  opacity: 1;
  margin: auto;
  justify-content: center;
`;

export const SwitchAccountButtons = styled.div`
  
`;

export const SwitchAccountButtonO = styled.button`
    background: #490057 0% 0% no-repeat padding-box;
    box-shadow: 24px 22px 93px #00000029;
    border-radius: 7px 0px 0px 7px;
    color: #FFF;
    font-size: 15px;
    height: 42px;
    width: 115px;
    border: none;
`;
export const SwitchAccountButtonT = styled.button`
    background: #B8B8B8 0% 0% no-repeat padding-box;
    box-shadow: 24px 22px 93px #00000029;
    border-radius: 0px 7px 7px 0px;
    color: #FFF;
    font-size: 15px;
    height: 42px;
    width: 115px;
    border: none;
`;

export const Sidebar = styled.div`
  background: #490057;
  border-radius: 16px;
  padding: 30px 40px;
  display: grid;
  gap: 41px;
`;

export const SidebarItem = styled.div`
  display: grid;
  gap: 17px;
  grid-template-columns: 29px 1fr;
`;

export const SidebarIcon = styled.img`
  width: 29px;
  height: 29px;
`;

export const SidebarText = styled.span`
   color: #FFF;
    letter-spacing: 0;
    line-height: 27px;
    font: 20px;
    opacity: 1
`;

export const CenterContainer = styled.div`
  display: grid;
  height: 100vh;
  gap: 34px;
  max-width: 926px;
`;

export const ProfileContainer = styled.div`
  background: #9400b11c;
  border-radius: 19px;
  padding: 20px 87px 12px 48px;
  display: grid;
  grid-template-columns: 125px 309px auto;
  grid-column-gap: 34px;
`;

export const ProfileImage = styled.img`
  height: 125px;
  width: 125px;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  display: grid;
`;

export const ProfileName = styled.h2`
  font-size: 40px;
  color: #490057;
  line-height: 52px;
  margin: 0;
`;

export const ProfileUsername = styled.h3`
  height: 18px;
  color: #787878;
  margin-bottom: 22px;
`;

export const ProfileDescription = styled.div`
  font-size: 16px;
  letter-spacing: 0;
  color: #787878;
  opacity: 1;
`;

export const ProfileStats = styled.div`
  display: grid;
  gap: 27px;
  grid-template-columns: 28px 56px 64px 64px;
`;

export const ProfileStat = styled.div`
  display: grid;
`;

export const ProfileStatValue = styled.span`
  line-height: 24px;
  font-size: 20px;
  letter-spacing: 0;
  color: #490057;
  opacity: 1;
  font-weight: 600;
`;

export const ProfileStatLabel = styled.span`
  line-height: 12px;
  font-size: 16px;
  letter-spacing: 0;
  color: #787878;
  opacity: 1;
`;

export const ProfileActionButton = styled.button`
  width: 119px;
  height: 29px;
  background: #490057;
  border-radius: 15px;
  opacity: 1;
  color: #fff;
  line-height: 12px;
  border: none;
  margin-bottom: 28px;
`;

export const OtherPagesContainer = styled.div``;

export const OtherPagesTitle = styled.h5`
  line-height: 20px;
  margin: 0;
  font-weight: normal;
  color: #490057;
`;

export const RightContainer = styled.div`
  height: 100vh;
  display: grid;
  gap: 72px;
`;

export const Placeholder = styled.div`
  height: 439px;
  background: #9400b11c;
  border-radius: 19px;
`;