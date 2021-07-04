import { Section, Container } from './PlanetSectionStyles';
import TabsContainer from './TabsContainer/TabsContainer';
import IllustrationContainer from './IllustrationContainer/IllustrationContainer';
import IntroContainer from './IntroContainer/IntroContainer';
import InfoContainer from './InfoContainer/InfoContainer';

const PlanetSection = () => {
    return (
        <Section>
            <Container>
                <TabsContainer />
                <IllustrationContainer />
                <IntroContainer />
                <InfoContainer />
            </Container>
        </Section>
    );
};

export default PlanetSection;
