import { Section, Container } from './PlanetSectionStyles';
import useReplaceInfo from './useReplaceInfo';
import Tabs from './Tabs/Tabs';
import Illustration from './Illustration/Illustration';
import Intro from './Intro/Intro';
import Info from './Info/Info';

const PlanetSection = ({ planetData }) => {
    const [handleClick, currentData, currentTab, isChanging] =
        useReplaceInfo(planetData);

    return (
        <Section>
            <Container>
                <Tabs
                    planetData={planetData}
                    handleClick={handleClick}
                    currentTab={currentTab}
                />
                <Illustration
                    planetData={planetData}
                    currentData={currentData}
                    isChanging={isChanging}
                />
                <Intro
                    planetData={planetData}
                    currentData={currentData}
                    isChanging={isChanging}
                />
                <Info planetData={planetData} />
            </Container>
        </Section>
    );
};

export default PlanetSection;
