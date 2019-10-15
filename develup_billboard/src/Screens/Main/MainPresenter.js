import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../../Components/Title";
import Charts from "../../Components/Charts";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
`;

const MainPresenter = ({ loading }) => (
    <Container>
        <Title />
        <Charts />
    </Container>
);

MainPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MainPresenter;
