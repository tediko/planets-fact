import { Section, Container } from './PlanetSectionStyles';
import TabsContainer from './TabsContainer/TabsContainer';
import Illustration from './Illustration/Illustration';
import Intro from './Intro/Intro';
import Info from './Info/Info';

const PlanetSection = () => {
    return (
        <Section>
            <Container>
                <TabsContainer />
                <Illustration />
                <Intro />
                <Info />
            </Container>
        </Section>
    );
};

export default PlanetSection;
