import { Item, Link } from './NavMobileStyles';
import Icon from '../Icon/Icon';
import { planets } from './data';

const ItemControler = () => {
    return planets.map((planet) => (
        <Item key={planet.id} delay={planet.id}>
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
    ));
};

export default ItemControler;
