import { Section, Container } from './PlanetSectionStyles';
import TabsContainer from './TabsContainer/TabsContainer';
import Illustration from './Illustration/Illustration';
import IntroContainer from './IntroContainer/IntroContainer';
import Info from './Info/Info';

const PlanetSection = () => {
    return (
        <Section>
            <Container>
                <TabsContainer />
                <Illustration />
                <IntroContainer />
                <Info />
            </Container>
        </Section>
    );
};

export default PlanetSection;
