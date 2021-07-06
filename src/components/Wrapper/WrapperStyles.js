import styled from 'styled-components';
import { starsBackground } from './starsBackground';

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    background-image: radial-gradient(
        ellipse at bottom,
        #1c2837 0%,
        #050608 100%
    );
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 2px;
        top: -2px;
        background: white;
        box-shadow: ${starsBackground};
        border-radius: 100px;
    }
`;
