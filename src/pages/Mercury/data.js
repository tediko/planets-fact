import mercuryImage from '../../assets/images/planet-mercury.svg';
import mercuryInternalImage from '../../assets/images/planet-mercury-internal.svg';
import mercuryGeoImage from '../../assets/images/planet-mercury-geology.png';

export const data = {
    name: 'Mercury',
    overview: {
        content:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
        image: mercuryImage,
    },
    structure: {
        content:
            "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
        image: mercuryInternalImage,
    },
    geology: {
        content:
            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
        image: mercuryImage,
        geo: mercuryGeoImage,
    },
    sectionColor: 'hsl(194, 48%, 49%)',
    desktopImgWidth: '290px',
    tabletImgWidth: '184px',
    mobileImgWidth: '111px',
    rotation: '58.6 Days',
    revolution: '87.97 Days',
    radius: '2,439.7 KM',
    temperature: '430°c',
};
