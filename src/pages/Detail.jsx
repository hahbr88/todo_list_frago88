import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Background = styled.div`
    background-color: white;
    margin: 0;

`

const Modal = styled.div`
    width: 50%;
    height: 100vh;
`


const Detail = () => {
    const navigate = useNavigate();
    return (
        <Background>
            <Modal>
                <div>
                    <div>ID</div>
                    <div><button onClick={() => navigate('/')}>이전으로</button></div>
                </div>
                <div>
                    <div>타이틀입니다</div>
                    <div>내용입니다</div>
                </div>
            </Modal>
        </Background>
    )
}


export default Detail;