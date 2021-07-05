import neptuneImage from '../../assets/images/planet-neptune.svg';
import neptuneInternalImage from '../../assets/images/planet-neptune-internal.svg';
import neptuneGeoImage from '../../assets/images/planet-neptune-geology.png';

export const data = {
    name: 'Neptune',
    overview: {
        content:
            'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
        source: 'https://en.wikipedia.org/wiki/Neptune',
        image: neptuneImage,
    },
    structure: {
        content:
            "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        source: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
        image: neptuneInternalImage,
    },
    geology: {
        content:
            "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
        source: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
        image: neptuneImage,
        geo: neptuneGeoImage,
    },
    sectionColor: 'hsl(222, 87%, 56%)',
    desktopImgWidth: '450px',
    tabletImgWidth: '285px',
    mobileImgWidth: '173px',
    rotation: '16.08 Hours',
    revolution: '164.79 Years',
    radius: '24,622 KM',
    temperature: '-201°c',
};
