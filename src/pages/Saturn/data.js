import saturnImage from '../../assets/images/planet-saturn.svg';
import saturnInternalImage from '../../assets/images/planet-saturn-internal.svg';
import saturnGeoImage from '../../assets/images/planet-saturn-geology.png';

export const data = {
    name: 'Saturn',
    overview: {
        content:
            'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
        source: 'https://en.wikipedia.org/wiki/Saturn',
        image: saturnImage,
    },
    structure: {
        content:
            "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
        image: saturnInternalImage,
    },
    geology: {
        content:
            "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
        image: saturnImage,
        geo: saturnGeoImage,
    },
    sectionColor: 'hsl(17, 73%, 46%)',
    desktopImgWidth: '666px',
    tabletImgWidth: '422px',
    mobileImgWidth: '256px',
    rotation: '10.8 Hours',
    revolution: '29.46 Years',
    radius: '58,232 KM',
    temperature: '-138°c',
};
