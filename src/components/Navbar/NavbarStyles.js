import styled from 'styled-components';

export const Header = styled.header`
    padding: 16px 24px;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayDark};

    @media (min-width: 768px) {
        padding: 32px 24px 27px 24px;
    }

    @media (min-width: 1025px) {
        padding: 0 44px 0 32px;
        height: 85px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        flex-flow: column;
    }

    @media (min-width: 1025px) {
        flex-flow: row;
        height: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
`;

export const Logo = styled.a`
    font-size: 28px;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: -1.05px;
`;
