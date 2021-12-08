import { batch } from "react-redux";
import styled from "styled-components";
//SeatButtons
interface Props {
  backgroundColor: boolean
}

export const Button = styled.button`
width: 75px;
height: 75px;
border: 1px solid black;
margin: 2px;
`
//FreeSpace
export const NotExistingButton = styled(Button)`
background-color:transparent;
border: 0px;
cursor: default;
&:hover{
    background-color: transparent;
  }
`;

export const DisabledButton = styled(Button)`
background-color: black;
color: white;
cursor: default;
&:hover{
    background-color: #0000008b; 
  }
`
export const FreeSeatButton = styled(Button) <Props>`
background-color: ${props => props.backgroundColor ? `#FFA500;` : `white`};
&:hover{
    background-color: ${props => props.backgroundColor ? `#ffa6007a;` : `#f0f0f0;`}; 
  }
cursor: pointer;
color: black;
`


//NextButton
export const NextButton = styled.button`
margin:10px;
width:100px;
height:38px;
border: 1px solid black;
font-family: 'Lato', sans-serif;
font-size:20px;
font-weight:bold;
&:hover{
    background-color: #f0f0f0;
  }
`;