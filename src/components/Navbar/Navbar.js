import { Header, Logo, Container } from './NavbarStyles';
import NavMobile from './NavMobile';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

    return (
        <Header>
            <Container>
                <Logo to="/">The Planets</Logo>
                <NavMobile windowWidth={windowWidth} />
            </Container>
        </Header>
    );
};

export default Navbar;
