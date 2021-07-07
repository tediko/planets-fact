import {
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
} from './KeyVisualStyles';

const PlanetSwitch = ({ data, activePlanet }) => {
    const planetSwitch = () => {
        switch (data.name) {
            case 'Mercury':
                return (
                    <Mercury
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Venus':
                return (
                    <Venus
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Earth':
                return (
                    <Earth
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Mars':
                return (
                    <Mars
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Jupiter':
                return (
                    <Jupiter
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Saturn':
                return (
                    <Saturn
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Uranus':
                return (
                    <Uranus
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Neptune':
                return (
                    <Neptune
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
        }
    };
    return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
