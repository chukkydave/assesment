import styled from 'styled-components';

export const Chief = styled.div`
  width: 329px;
  height: 439px;
  background: #E8D8EC;
  border-radius: 16px;
  display: grid;
  align-content: center;
`;

export const List = styled.div`
  display: grid;
  justify-content: space-evenly;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  gap: 15px;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ProfileInfo = styled.div`
  display: grid;
  align-items: center;
`;

export const ProfileName = styled.h3`
  margin: 0;
`;

export const Location = styled.span`
  font-size: 12px;
  color: #999;
`;

export const Button = styled.button`
  color: #fff;
  width: 78px;
  height: 27px;
  background: #490057;
  border-radius: 13px;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Navbar = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 24.48px;
`;

export const NavItem = styled.div`
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #9B9B9B;
  opacity: 1;

  &.active {
    border-bottom: 4px solid #333;
    color: #490057;
  }
`;
