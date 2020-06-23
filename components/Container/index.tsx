import React from 'react';
import styled from 'styled-components';
import { device } from 'types/Theme';
const Container = styled.div`
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;

    @media ${device.laptop} { 
        max-width: 800px;
    }

    @media ${device.tablet} {
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export default Container;
