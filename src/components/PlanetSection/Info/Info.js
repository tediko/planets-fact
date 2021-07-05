import { Info, Item, Heading, Desc } from './InfoStyles';

const InfoContainer = ({ planetData }) => {
    return (
        <Info>
            <Item>
                <Heading>Rotation Time</Heading>
                <Desc>{planetData.rotation}</Desc>
            </Item>
            <Item>
                <Heading>Revolution Time</Heading>
                <Desc>{planetData.revolution}</Desc>
            </Item>
            <Item>
                <Heading>Radius</Heading>
                <Desc>{planetData.radius}</Desc>
            </Item>
            <Item>
                <Heading>Average temp.</Heading>
                <Desc>{planetData.temperature}</Desc>
            </Item>
        </Info>
    );
};

export default InfoContainer;
