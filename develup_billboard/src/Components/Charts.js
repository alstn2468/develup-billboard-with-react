import React from "react";
import styled from "styled-components";
import ChartItem from "./ChartItem";

const Charts = styled.ol`
    background-color: #aaa;
    overflow: hidden;
    counter-reset: rank;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 50px;
`;

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default () => (
    <Charts>
        {dummy.map(val => (
            <ChartItem item={val} />
        ))}
    </Charts>
);
