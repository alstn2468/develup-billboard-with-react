import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    color: white;
    font-size: 80px;
    letter-spacing: 0.2em;
    text-indent: 0.2em;
    padding: 50px 0;
    position: relative;
    width: 50%;
    margin: 0 auto;

    :after {
        content: " ";
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 100px;
        border-radius: 10px;
        bottom: 70px;
        opacity: 0.1;
        height: 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;

        :after {
            content: " ";
            background-color: white;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 10px;
            border-radius: 10px;
            bottom: 50px;
            opacity: 0.1;
            height: 10px;
        }
    }
`;

export default () => <Title>BILLBOARD</Title>;
