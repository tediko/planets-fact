import { useEffect, useState } from 'react';
import { Header, Logo, Container } from './NavbarStyles';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 4 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <Header>
            <Container>
                <Logo to="/">The Planets</Logo>
                {windowWidth >= tabletBreakpoint ? (
                    <NavDesktop />
                ) : (
                    <NavMobile windowWidth={windowWidth} />
                )}
            </Container>
        </Header>
    );
};

export default Navbar;
