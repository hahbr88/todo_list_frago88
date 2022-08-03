import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import styled from "styled-components";

const LayoutStyle = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
    display: block;

    font-family: 'Nanum Pen Script', cursive;
`
function Layout() {
    return (
        <LayoutStyle className="layout">
            <Header/>
            {/* <Form todoBoxes = {todoBoxes} setTodoBoxes = {setTodoBoxes}/>
            <List todoBoxes = {todoBoxes} setTodoBoxes = {setTodoBoxes}/>           */}
            <Form/>
            <List/>          
        </LayoutStyle>
    );
}

export default Layout;
