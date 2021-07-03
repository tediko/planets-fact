import { useEffect, useState } from 'react';
import { Header, Logo, Container } from './NavbarStyles';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

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
