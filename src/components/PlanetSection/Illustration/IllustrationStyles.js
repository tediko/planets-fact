import styled from 'styled-components';

export const Illustration = styled.div`
    height: 100vw;
    max-height: 304px;
    padding: 0 24px;

    @media (min-width: 768px) {
        grid-area: illustration;
        max-height: 460px;
        padding: 0;
    }

    @media (min-width: 1025px) {
        max-height: 754px;
    }
`;

export const Image = styled.div`
    background-image: url(${(props) => props.image});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    max-width: 173px; // get from props
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 285px; // get from props
    }

    @media (min-width: 1025px) {
        max-width: 450px; // get from props
        margin: 10px 0 0 93px;
    }
`;
