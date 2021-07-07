import { Nav, List, Item, Link } from './NavDesktopStyles';
import { planets } from '../data';

const NavDesktop = ({ pathName, activePlanet, onHover }) => {
    return (
        <Nav>
            <List>
                {planets.map((planet) => (
                    <Item key={planet.id}>
                        <Link
                            to={planet.path}
                            $bgcolor={planet.color}
                            $isActive={
                                planet.path === pathName ||
                                planet.path === activePlanet
                            }
                            onMouseOver={() => onHover(planet.path)}
                            onMouseLeave={() => onHover(false)}
                            onFocus={() => onHover(planet.path)}
                            onBlur={() => onHover(false)}
                        >
                            {planet.name}
                        </Link>
                    </Item>
                ))}
            </List>
        </Nav>
    );
};

export default NavDesktop;
