import React from "react";
import styled from "styled-components";
import './css.css'

const Container = styled.div`
    height: 60px;
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-weight: 700;
    font-size: 20px;

    /* background-image: url('img/logo.png'); */
    /* background-image: url('https://ifh.cc/g/lqxgbl.png'); */
    background-repeat: no-repeat;
    background-position: 13%;
`

function Header() {
    return (
        <Container className="dddd">
                <div>Todo List Frago88</div>
                <div>Made by React JS</div>
        </Container>
    );
}

export default Header;
