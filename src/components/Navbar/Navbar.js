import { Header, Logo, Container } from './NavbarStyles';
import NavMobile from './NavMobile';

const Navbar = () => {
    return (
        <Header>
            <Container>
                <Logo to="/">The Planets</Logo>
                <NavMobile />
            </Container>
        </Header>
    );
};

export default Navbar;
