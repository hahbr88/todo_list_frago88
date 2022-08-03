import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 60px;
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-weight: 700;
    font-size: 20px;

    background-image: url('../../../public/logo.png');
    /* background-repeat: no-repeat; */
    /* background-position: 13%; */
`

function Header() {
    return (
        <Container>
                <div>Todo List Frago88</div>
                <div>Made by React JS</div>
        </Container>
    );
}

export default Header;
