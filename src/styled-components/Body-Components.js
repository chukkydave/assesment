import styled from 'styled-components';

const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 5;
    width: 100%;
    height: 263px;
    background: transparent linear-gradient(267deg, #A303A0 0%, #490057 100%);
    border: 1px solid #707070;
    border-radius: 0px 0px 35px 35px;
    opacity: 1;
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
    
`;

const Div2 = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
    height: 113px;
    background: #FFFFFF;
    border-radius: 10px;
    opacity: 1;
    text-align: center;

.title{
    font-size: 20px;
    margin-top: 11px;
    letter-spacing: 0px;
    color: #490057;
}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19px;
`;

const NavPill = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#490057' : '#B8B8B8')};
  color: ${(props) => (props.active ? '#fff' : '#fff')};
  cursor: pointer;
`;

const Div3 = styled.div`
    grid-area: 2 / 2 / 4 / 4;
   
width: 100%;
height: 266px;
/* UI Properties */
background: #9400B11C;
border-radius: 19px;
opacity: 1;
`;

const Div4 = styled.div`
    grid-area: 2 / 4 / 6 / 5;
    
width: 100%;
height: 439px;
background: #E8D8EC;
border-radius: 16px;
opacity: 1;
`;

const Div5 = styled.div`
    grid-area: 3 / 1 / 6 / 2;
   
width: 100%;
height: 368px;
background: #490057;
box-shadow: 2px 6px 20px #0000001C;
border-radius: 16px;
opacity: 1;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Text = styled.span`
  font-size: 16px;
`;


const Div6 = styled.div`
    grid-area: 4 / 2 / 7 / 4;
    
width: 100%;
height: 180px;
background: #FFFFFF;
border: 1px solid #49005730;
opacity: 1;
`;

const Div7 = styled.div`
    grid-area: 7 / 1 / 11 / 2;
    
width: 100%;
height: 368px;
background: #FFFFFF;
border-radius: 13px;
opacity: 1;
    
`;


const Div8 = styled.div`
  grid-area: 7 / 2 / 11 / 4;
  
width: 100%;
height: 388px;
background: #FFFFFF;
border-radius: 28px;
opacity: 1;
`;
const Div9 = styled.div`
  grid-area: 7 / 4 / 12 / 5;
 
width: 100%;
height: 439px;
background: #E8D8EC;
border-radius: 16px;
opacity: 1;
`;

const Div10 = styled.div`
  grid-area: 11 / 2 / 13 / 4;
  
width: 100%;
height: 388px;
background: #FFFFFF;
border-radius: 28px;
opacity: 1;
`;

export const LeftSide = styled.div`
  display: grid;
 grid-template-columns: 0.2fr 0.04fr 0.4fr 1fr;
 grid-column-gap: 9.44px;
  align-items: center;

  .dp{ 
    grid-area:1/1/2/2;
    width: 82px;
    height: 82px;
    margin-right: 4px;
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

  .message{
    grid-area: 1 / 2 / 2 / 3;
    display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-template-areas: "icon badge";
  justify-content: end;
  align-items: start;

    img{
        width: 35px;
        height: 31px;
        grid-area: icon;
    }

    .badge {
 grid-area: badge;
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 4px;
  border-radius: 50%;
  justify-self: end;
  margin-top: -10px;
  margin-right: -10px;
}
  }

  

  .bell{
    grid-area: 1 / 3 / 2 / 4;
    top: 141px;
    left: 1169px;
    width: 28px;
    height: 29px;
  }

  .input{
    grid-area: 1 / 4 / 2 / 5;
    
    width: 300px;
    height: 72px;
    background: #490057;
    border-radius: 16px;
    border:none;
  }
`;




export const Image = styled.img`
  margin: 0 10px; /* Adjust the margin as needed */
`;

export const SearchInput = styled.input`
  margin: 0 10px; /* Adjust the margin as needed */
  
`;

export {
    Div1,
    Div2,
    Div3,
    Div4,
    Div5,
    Div6,
    Div7,
    Div8,
    Div9,
    Div10,
    NavContainer,
    NavPill
};
