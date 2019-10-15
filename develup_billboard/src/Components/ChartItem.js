import React from "react";
import styled, { keyframes } from "styled-components";
import DISC from "../assets/images/disc.png";
import COVER01 from "../assets/images/cover01.png";
import COVER02 from "../assets/images/cover02.png";
import COVER03 from "../assets/images/cover03.png";
import COVER04 from "../assets/images/cover04.png";
import COVER05 from "../assets/images/cover05.png";
import COVER06 from "../assets/images/cover06.png";
import COVER07 from "../assets/images/cover07.png";

const Spin = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

const ChartItem = styled.li`
    margin: 60px;
    height: 80px;
    position: relative;
    counter-increment: rank;
`;

const Album = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.5s;
    overflow: hidden;

    :before {
        content: counter(rank);
        font-size: 50px;
        padding: 10px;
        width: 1em;
        text-align: center;
        margin-right: 0.25em;
        font-weight: bold;
        font-style: italic;
        float: left;

        @media screen and (max-width: 768px) {
            font-size: 30px;
            padding: 5px 0px 0px 0px;
            margin-right: 0em;
        }
    }

    :hover {
        background-color: white;
        margin: -30px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);

        .album-title {
            opacity: 1;
        }

        .album-disc {
            right: 70px;
            transition-delay: 0.5s;

            @media screen and (max-width: 768px) {
                right: 60px;
            }
        }

        .album-description {
            transition-delay: 0.5s;
            opacity: 1;
        }

        :before {
            color: yellowgreen;
        }
    }
`;

const AlbumCover = styled.img`
    float: right;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const AlbumDisc = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    animation-name: ${Spin};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transition: right 0.5s;
`;

const AlbumContent = styled.div`
    overflow: hidden;
    padding: 15px;
`;

const AlbumTitle = styled.h2`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const AlbumSinger = styled.p`
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const AlbumDescription = styled.p`
    opacity: 0;
    transition: opacity 0.5s;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ImagePath = {
    1: COVER01,
    2: COVER02,
    3: COVER03,
    4: COVER04,
    5: COVER05,
    6: COVER06,
    7: COVER07
};

export default ({ item }) => (
    <ChartItem>
        <Album>
            <AlbumCover src={ImagePath[(item % 7) + 1]} />
            <AlbumDisc className="album-disc" src={DISC} />
            <AlbumContent>
                <AlbumTitle className="album-title">Truth Hurts</AlbumTitle>
                <AlbumSinger>Risso</AlbumSinger>
                <AlbumDescription className="album-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                </AlbumDescription>
            </AlbumContent>
        </Album>
    </ChartItem>
);
