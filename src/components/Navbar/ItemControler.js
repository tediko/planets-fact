import { Item, Link } from './NavbarStyles';
import Icon from '../Icon/Icon';
import { planets } from './data';

const ItemControler = ({ mobile }) => {
    return planets.map((planet) =>
        mobile ? (
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
                <Link planetColor={planet.color}>
                    {planet.name}
                    <Icon
                        name="icon-chevron1"
                        size={20}
                        color="hsl(240, 6%, 54%)"
                        customStyle={{ marginTop: '5px' }}
                    />
                </Link>
            </Item>
        ) : (
            <Item key={planet.id}>
                <Link planetColor={planet.color}>{planet.name}</Link>
            </Item>
        )
    );
};

export default ItemControler;
