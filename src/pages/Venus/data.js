import venusImage from '../../assets/images/planet-venus.svg';
import venusInternalImage from '../../assets/images/planet-venus-internal.svg';
import venusGeoImage from '../../assets/images/planet-venus-geology.png';

export const data = {
    name: 'Venus',
    overview: {
        content:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        source: 'https://en.wikipedia.org/wiki/Venus',
        image: venusImage,
    },
    structure: {
        content:
            'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
        source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
        image: venusInternalImage,
    },
    geology: {
        content:
            'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
        source: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
        image: venusImage,
        geo: venusGeoImage,
    },
    sectionColor: 'hsl(33, 82%, 61%)',
    desktopImgWidth: '400px',
    tabletImgWidth: '253px',
    mobileImgWidth: '154px',
    rotation: '243 Days',
    revolution: '224.7 Days',
    radius: '6,051.8 KM',
    temperature: '471°c',
};
