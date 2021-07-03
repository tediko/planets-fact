import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    height: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-flow: row;
    gap: 32px;
    width: 100%;
    background: ${(props) => props.theme.colors.black};
    margin-top: 39px;

    @media (min-width: 1025px) {
        margin-top: 0;
        height: 100%;
    }
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
    display: flex;
    position: relative;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.75;
    cursor: pointer;
    transition: opacity 300ms ease;

    &:hover {
        opacity: 1;
    }

    @media (min-width: 1025px) {
        height: 100%;
        align-items: center;
        margin-top: 5px;

        &::after {
            position: absolute;
            content: '';
            top: -5px;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: ${(props) => props.color};
            transform: scaleX(0);
            transition: transform 350ms ease;
        }

        &:hover {
            &::after {
                transform: scaleX(1);
            }
        }
    }
`;
