import { Section, Container } from './PlanetSectionStyles';
import Tabs from './Tabs/Tabs';
import Illustration from './Illustration/Illustration';
import Intro from './Intro/Intro';
import Info from './Info/Info';

const PlanetSection = () => {
    return (
        <Section>
            <Container>
                <Tabs />
                <Illustration />
                <Intro />
                <Info />
            </Container>
        </Section>
    );
};

export default PlanetSection;
