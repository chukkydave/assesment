import styled from 'styled-components';

export const Chief = styled.div`
  width: 329px;
  height: 439px;
  background: #E8D8EC;
  border-radius: 16px;
  display: grid;
  justify-content: space-around;
`;

export const List = styled.div`
  margin-top: 5px;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  align-items: start;
  margin: 15.57px 0px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ProfileInfo = styled.div`
  display: grid;
  justify-items: stretch;
  margin: 0px 60.5px 0px 13px;
`;

export const ProfileName = styled.h3`
  margin: 0;
`;

export const Location = styled.span`
  font-size: 12px;
  color: #999;
  grid-column: span 2;
`;

export const Orders = styled.div`
  grid-column: span 2;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  color: #fff;
  width: 78px;
  height: 27px;
  background: #490057;
  border-radius: 13px;
  border: none;
  margin-right: 20px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProgressBar = styled.div`
  height: 8px;
  width: 150px;
  background-color: #9B9B9B3B;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #FBB03B;
  width: 50%;
`;

export const OrdersLeft = styled.span`
  font-size: 12px;
  color: #999;
`;

export const Heading = styled.h4`
  width: 200px;
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  color: #490057;
  margin: 0 0 10px  0;
`;

export const SuggestedListingsContainer = styled.div`
 
`;
