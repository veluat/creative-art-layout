import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {MainSection1} from "./layout/sections/main-section-1/Main-section-1";
import {ArtOfWeekSection2} from "./layout/sections/art-of-week-section-2/ArtOfWeek-section-2";
import React from "react";


function App() {
    return (
        <Wrapper className="App">
            <Header/>
            <MainSection1/>
            <ArtOfWeekSection2/>

        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
background-color: #090F1D;
  color: #FFFFFD;
  font-size: 16px;
`
