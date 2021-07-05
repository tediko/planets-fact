import { useState, useEffect } from 'react';
import { Section, Container } from './PlanetSectionStyles';
import useReplaceInfo from './useReplaceInfo';
import Tabs from './Tabs/Tabs';
import Illustration from './Illustration/Illustration';
import Intro from './Intro/Intro';
import Info from './Info/Info';

const PlanetSection = ({ planetData }) => {
    const [handleClick, currentData, currentTab, isChanging] =
        useReplaceInfo(planetData);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const checkWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidth);

        return () => {
            window.removeEventListener('resize', checkWindowWidth);
        };
    }, []);

    return (
        <Section>
            <Container>
                <Tabs
                    planetData={planetData}
                    handleClick={handleClick}
                    currentTab={currentTab}
                    windowWidth={windowWidth}
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
