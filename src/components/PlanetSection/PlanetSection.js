import { Section, Container } from './PlanetSectionStyles';
import TabsContainer from './TabsContainer/TabsContainer';
import Illustration from './Illustration/Illustration';
import IntroContainer from './IntroContainer/IntroContainer';
import InfoContainer from './InfoContainer/InfoContainer';

const PlanetSection = () => {
    return (
        <Section>
            <Container>
                <TabsContainer />
                <Illustration />
                <IntroContainer />
                <InfoContainer />
            </Container>
        </Section>
    );
};

export default PlanetSection;
