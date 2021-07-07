import { Nav, List, Item, Link } from './NavDesktopStyles';
import { planets } from '../data';

const NavDesktop = () => {
    return (
        <Nav>
            <List>
                {planets.map((planet) => (
                    <Item key={planet.id}>
                        <Link to={planet.path} $bgcolor={planet.color}>
                            {planet.name}
                        </Link>
                    </Item>
                ))}
            </List>
        </Nav>
    );
};

export default NavDesktop;
