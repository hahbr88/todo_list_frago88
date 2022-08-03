import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { useSelector } from "react-redux"; // import 해주세요.

const Background = styled.div`
    margin: 0;
    height: 100vh;
    font-family: 'Nanum Pen Script', cursive;
`
const Modal = styled.div`
    width: 50%;
    height: 50vh;
    margin: 30vh auto;
    border: solid 3px #5b6ee1 ;
    border-radius: 5px;
    padding: 30px;
    background-color: #dadfff;

`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    div:first-child {
        margin-left: 20px;
    }
    div:last-child {
        margin-right: 20px;
        button{
            background-color: rgb(228, 228, 228);
            border: none;
            border-radius: 10px;
            color: black;
            font-weight: 700;
            height: 40px;
            width: 140px;
            cursor: pointer;
            font-family: 'Nanum Pen Script', cursive;
            font-size: 20px;
        }

    font-family: 'Jua', sans-serif;
    cursor: pointer;
    }
`
const Bottom = styled.div`
    margin-top: 30px;
    h1 {
        margin-bottom: 30px;
        font-size: 60px;
    }
    div {
        height: 100%;
        font-size: 20px;
    }
`

const Detail = () => {
    const todos = useSelector((state) => state.inputTodo.todos);
    const navigate = useNavigate();
    const param = useParams();
    const thisTodo = todos.find((e) => e.id === param.id)
    const shoutedId = param.id.split('-')[0]

    return (
        <Background>
            <Modal>
                <Top>
                    <div>id : {shoutedId}</div>
                    <div><button onClick={() => navigate('/')}>이전으로</button></div>
                </Top>
                <Bottom>
                    <h1>{thisTodo.title}</h1>
                    <div>{thisTodo.body}</div>
                </Bottom>
            </Modal>
        </Background>
    )
}

export default Detail;