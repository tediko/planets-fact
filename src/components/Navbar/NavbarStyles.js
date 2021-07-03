import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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
    }
`;

export const Logo = styled.a`
    font-size: 28px;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: -1.05px;
`;

export const Nav = styled.nav`
    @media (min-width: 1025px) {
        height: 100%;
    }
`;

export const Menu = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 17px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Bars = styled.span`
    position: relative;
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.colors.white};
    transition: transform 200ms ease;

    &::before,
    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background-color: inherit;
        transition: top 200ms ease 0.12s, transform 200ms ease;
    }

    &::before {
        top: -6px;
    }

    &::after {
        top: 6px;
    }

    ${(props) =>
        props.isOpen
            ? css`
                  & {
                      transform: rotate(45deg);
                      transition: transform 200ms 0.12s ease;
                  }

                  &::before {
                      top: 0;
                      opacity: 0;
                      transition: top 200ms ease, opacity 200ms ease;
                  }

                  &::after {
                      top: 0;
                      transform: rotate(-90deg);
                      transition: top 200ms ease, transform 200ms ease 0.12s;
                  }
              `
            : ''};
`;

export const List = styled(motion.ul)`
    position: absolute;
    display: flex;
    flex-flow: column;
    inset: 69px 0 0 0;
    padding: 0 24px;
    width: 100%;
    background: ${(props) => props.theme.colors.black};

    @media (min-width: 768px) {
        position: unset;
        flex-flow: row;
        inset: unset;
        gap: 32px;
        margin-top: 39px;
        padding: 0;
    }

    @media (min-width: 1025px) {
        margin-top: 0;
        height: 100%;
    }
`;

export const Item = styled(motion.li)`
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayDark};

    @media (min-width: 768px) {
        border-bottom: unset;
    }
`;

export const Link = styled.a`
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: 0.9375rem;
    font-weight: 600;
    letter-spacing: 1.36px;
    line-height: 25px;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    padding: 20px 0 20px 44px;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        width: 20px;
        height: 20px;
        background-color: ${(props) => props.planetColor};
        border-radius: 50%;
        transform: translateY(-55%);
    }

    @media (min-width: 768px) {
        justify-content: unset;
        padding: unset;
        font-size: 0.6875rem;
        letter-spacing: 1px;
        opacity: 0.75;
        cursor: pointer;
        transition: opacity 300ms ease;

        &::before {
            content: unset;
        }

        &:hover {
            opacity: 1;
        }
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
            background-color: ${(props) => props.sectionColor};
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
