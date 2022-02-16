import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import banana from '../../../public/assets/items/bananas.png';

const Image = styled.img`

`;

const Title = styled.h3`

`;

const BtnRow = styled.div`

`;

const Btn = styled.div`
    border: 2px solid #d9d9d6;
    width: 100%;
    display: flex;
    border-radius: 1rem;
    position: relative;
`;

const Plus = styled.button`
    width: 100%;
    border: none;
    height: 4rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 30%;
    background: none;
    color: #63666a;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    font-size: 14pt;
`;

const Minus = styled.button`
    width: 100%;
    border: none;
    height: 4rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 30%;
    background: none;
    color: #63666a;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    font-size: 14pt;
`;

const InStock = styled.input`
    width: 40%;
    padding: 0 0.2rem;
    border-color: #d9d9d6;
    border-style: solid;
    border-width: 0 2px;
    height: 4rem;
    font-size: 2.2rem;
    text-align: center;
    border-radius: 0;
`;

export default (props) => {
    const [count, setCount] = useState(0);

    const decrease = () => {
        const sendEmail = () => {
            let params = {
                name: 'Gregory'
            }

            emailjs.send("service_jhk0vja", "bananas_inventory_at_0", params, "user_362jS6RmUwAhlFtsY4D9w")
            .then(function(response) {
                console.log('Success', response.status);
            }, function(error) {
                console.log('Failed', error);
            })
        }
        let minusBtn = document.getElementById('minus-btn');
        let plusBtn = document.getElementById('plus-btn');
        if(count <= 0) {
            sendEmail();
            return;
        } else{
            setCount(count - 1);
        }
    }

    const increase = () => { 
        let minusBtn = document.getElementById('minus-btn');
        let plusBtn = document.getElementById('plus-btn');
        if(count >= 100) {
            return;
        } else{
            setCount(count + 1);
        }
    }


    return (
        <Card sx={{  minWidth: 275 }}>
            <CardContent>
                <Image width="450px" src={banana}/>
                <Title>Banana</Title>
                <BtnRow id="btn-row">
                    <Btn id="btn">
                        <Minus onClick={decrease} id="minus-btn" disabled={false}>-</Minus>
                        <InStock readOnly disabled value={count}></InStock>
                        <Plus onClick={increase} id="plus-btn">+</Plus>                        
                    </Btn>
                </BtnRow>
            </CardContent>
        </Card>
    );
};