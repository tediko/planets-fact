import { Info, Item, Heading, Desc } from './InfoStyles';

const InfoContainer = () => {
    return (
        <Info>
            <Item>
                <Heading>Rotation Time</Heading>
                <Desc>0.99 Days</Desc>
            </Item>
            <Item>
                <Heading>Revolution Time</Heading>
                <Desc>365.26 Days</Desc>
            </Item>
            <Item>
                <Heading>Radius</Heading>
                <Desc>6,371 KM</Desc>
            </Item>
            <Item>
                <Heading>Average temp.</Heading>
                <Desc>16&deg;C</Desc>
            </Item>
        </Info>
    );
};

export default InfoContainer;
