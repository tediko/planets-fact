import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { asteroidsBackground } from './asteroidsBackground';
import sunImage from '../../assets/images/sun.png';
import mercuryImage from '../../assets/images/planet-mercury.svg';
import venusImage from '../../assets/images/planet-venus.svg';
import earthImage from '../../assets/images/planet-earth.svg';
import marsImage from '../../assets/images/planet-mars.svg';
import jupiterImage from '../../assets/images/planet-jupiter.svg';
import saturnImage from '../../assets/images/planet-saturn.svg';
import uranusImage from '../../assets/images/planet-uranus.svg';
import neptuneImage from '../../assets/images/planet-neptune.svg';
import { NavLink } from 'react-router-dom';

export const Container = styled(motion.div)`
    position: relative;
    min-height: 100vh;
`;

export const Planet = styled(NavLink)`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);
    transition: border 300ms ease;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100px;
        transition: transform 300ms ease;
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }

    @media (min-width: 768px) {
        &:hover {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        &:focus {
            outline: none;
        }

        &:focus-visible {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        ${(props) =>
            props.$isActive
                ? css`
                      border: 1px solid ${(props) => props.$planetColor};
                      &::before {
                          transform: scale(1.5) translate(-50%, -50%);
                      }
                  `
                : ''};
    }
`;

export const Sun = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 80px;
    width: 80px;
    border-radius: 1000px;
    background-image: url(${sunImage});
    background-size: cover;
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
        0 0 22px 11px rgba(255, 203, 0, 0.13);
    transform: translate(-50%, -50%);
`;

export const Mercury = styled(Planet)`
    width: 100px;
    height: 100px;
    animation: orbit 7.1867343561s linear infinite;
    z-index: 100;

    &::before {
        height: 8px;
        width: 8px;
        background-image: url(${mercuryImage});
        background-size: cover;
    }
`;

export const Venus = styled(Planet)`
    width: 130px;
    height: 130px;
    animation: orbit 18.4555338265s linear infinite;
    z-index: 99;

    &::before {
        height: 15px;
        width: 15px;
        background-image: url(${venusImage});
        background-size: cover;
    }
`;

export const Earth = styled(Planet)`
    width: 175px;
    height: 175px;
    animation: orbit 30s linear infinite;
    z-index: 98;

    &::before {
        width: 16px;
        height: 16px;
        background-image: url(${earthImage});
        background-size: cover;
    }
`;

export const Mars = styled(Planet)`
    width: 220px;
    height: 220px;
    animation: orbit 56.4261314589s linear infinite;
    z-index: 97;

    &::before {
        width: 12px;
        height: 12px;
        background-image: url(${marsImage});
        background-size: cover;
    }
`;

export const Jupiter = styled(Planet)`
    width: 370px;
    height: 370px;
    animation: orbit 355.7228171013s linear infinite;
    z-index: 96;

    &::before {
        width: 36px;
        height: 36px;
        background-image: url(${jupiterImage});
        background-size: cover;
    }
`;

export const Saturn = styled(Planet)`
    width: 470px;
    height: 470px;
    animation: orbit 882.6952471456s linear infinite;
    z-index: 95;

    &::before {
        width: 55px;
        height: 40px;
        background-image: url(${saturnImage});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const Uranus = styled(Planet)`
    width: 550px;
    height: 550px;
    animation: orbit 2512.4001967933s linear infinite;
    z-index: 94;

    &::before {
        width: 20px;
        height: 20px;
        background-image: url(${uranusImage});
        background-size: cover;
    }
`;

export const Neptune = styled(Planet)`
    width: 660px;
    height: 660px;
    animation: orbit 4911.7838624549s linear infinite;
    z-index: 93;

    &::before {
        width: 20px;
        height: 20px;
        background-image: url(${neptuneImage});
        background-size: cover;
    }
`;

export const AsteroidsBelt = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);

    height: 330px;
    width: 330px;
    opacity: 0.7;
    border-color: transparent;
    overflow: hidden;
    animation: orbit 179.9558282773s linear infinite;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        height: 210px;
        width: 210px;
        background: transparent;
        border-radius: 140px !important;
        box-shadow: ${asteroidsBackground};
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;
