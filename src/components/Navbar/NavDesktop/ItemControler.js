import { Item, Link } from './NavDesktopStyles';
import { planets } from '../data';

const ItemsDesktop = () => {
    return planets.map((planet) => (
        <Item key={planet.id}>
            <Link to={planet.path} bgcolor={planet.color}>
                {planet.name}
            </Link>
        </Item>
    ));
};

export default ItemsDesktop;
