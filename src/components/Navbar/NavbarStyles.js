import styled from 'styled-components';

export const Header = styled.header`
    padding: 16px 24px;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayDark};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.a`
    font-size: 28px;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
`;
