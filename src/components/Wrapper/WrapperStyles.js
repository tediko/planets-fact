import styled from 'styled-components';
import starsBackground from '../../assets/images/background-stars.svg';

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.black};
    background-image: url(${starsBackground});
    background-size: 100%;
`;
