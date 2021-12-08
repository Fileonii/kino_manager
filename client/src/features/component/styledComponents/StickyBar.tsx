import { batch } from "react-redux";
import styled from "styled-components";
//SeatButtons
export const StickyBar = styled.div`
background: #8d8d8d81;
height: 600px;
text-align: center;
position: fixed;
width: 18.72%;
margin-bottom: 30px;
border:0.5px solid grey;
`

export const StickyNav = styled.div`
background: #80808090;
position: sticky;
width:100%;
height:45px;
font-size:1.5rem;
`

export const StickyElement = styled.div`
width: 100%;
height: 50px;
background-color: #ffffff81;
margin:6px 0 6px 0;
`

export const StickyPlace = styled.div`
width:100%;
position: absolute;
bottom: 0px;
height: 100px;
background: #80808090;
display: flex;
    align-items: center;
    justify-content: center;
`
export const StickyButton = styled.button`
    display: flex;
    justify-content: center;
    width:75%;
    height: 40px;
    border: 0px solid black;
    border-radius: 25px;
    box-shadow: 5px 5px grey;
`
