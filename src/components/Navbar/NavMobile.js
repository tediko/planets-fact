import { Container, Menu, Bars, List } from './NavMobileStyles';
import ItemControler from './ItemControler';

const NavMobile = () => {
    return (
        <Container>
            <Menu
                aria-label="Menu toggle"
                aria-expanded="false"
                aria-controls="nav-list"
            >
                <Bars />
            </Menu>
            <List id="nav-list">
                <ItemControler />
            </List>
        </Container>
    );
};

export default NavMobile;
