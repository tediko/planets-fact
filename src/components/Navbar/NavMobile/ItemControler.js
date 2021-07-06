import { Item, Link } from './NavMobileStyles';
import Icon from '../../Icon/Icon';
import { planets } from '../data';

const ItemsMobile = ({ restoreToDefault }) => {
    return planets.map((planet) => (
        <Item
            key={planet.id}
            initial={{ x: `100vw` }}
            animate={{ x: '0vw' }}
            transition={{
                ease: [0.06, 0.9, 1, 0.98],
                duration: 0.7,
                delay: `${(planet.id * 5 + 0.5) / 100}`,
            }}
        >
            <Link
                to={planet.path}
                color={planet.color}
                onClick={() => restoreToDefault()}
            >
                {planet.name}
                <Icon
                    name="icon-chevron1"
                    size={20}
                    color="hsl(240, 6%, 54%)"
                    customStyle={{ marginTop: '5px' }}
                />
            </Link>
        </Item>
    ));
};

export default ItemsMobile;
