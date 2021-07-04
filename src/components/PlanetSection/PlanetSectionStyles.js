import styled from 'styled-components';

export const Section = styled.section`
    @media (min-width: 768px) {
        padding: 0 40px;
    }
`;

export const Container = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-areas: 'illustration illustration' 'intro tabs' 'info info';
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1025px) {
        grid-template-areas: 'illustration intro' 'illustration tabs' 'info info';
        grid-template-columns: 2.2fr 1fr;

        max-width: 1110px;
        margin: 0 auto;
    }
`;
