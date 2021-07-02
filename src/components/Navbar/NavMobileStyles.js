import styled, { css } from 'styled-components';

export const Container = styled.nav``;

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
                      transition: top 200ms ease;
                  }

                  &::after {
                      top: 0;
                      transform: rotate(-90deg);
                      transition: top 200ms ease, transform 200ms ease 0.12s;
                  }
              `
            : ''};
`;

export const List = styled.ul`
    position: absolute;
    display: flex;
    flex-flow: column;
    inset: 69px 0 0 0;
    padding: 0 24px;
    width: 100%;
`;

export const Item = styled.li`
    position: relative;
    left: 100vw;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayDark};
    transition: left 1s ease ${(props) => props.delay * 50}ms;

    ${(props) =>
        props.isOpen
            ? css`
                  left: 0;
              `
            : ''}
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
`;
