import {
    Container,
    Sun,
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
    AsteroidsBelt,
} from './KeyVisualStyles';

const KeyVisual = ({ activePlanet }) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 6,
            rotate: '-40deg',
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { delay: 1, duration: 3 },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            rotate: '-10deg',
            transition: { duration: 1 },
        },
    };

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Sun />
            <Mercury
                to="/mercury"
                aria-label="Mercury page"
                $isActive={activePlanet === '/mercury'}
                $planetColor="hsl(194, 48%, 49%)"
            />
            <Venus
                to="/venus"
                aria-label="Venus page"
                $isActive={activePlanet === '/venus'}
                $planetColor="hsl(33, 82%, 61%)"
            />
            <Earth
                to="/earth"
                aria-label="Earth page"
                $isActive={activePlanet === '/earth'}
                $planetColor="hsl(263, 67%, 51%)"
            />
            <Mars
                to="/mars"
                aria-label="Mars page"
                $isActive={activePlanet === '/mars'}
                $planetColor="hsl(10, 63%, 51%)"
            />
            <Jupiter
                to="/jupiter"
                aria-label="Jupiter page"
                $isActive={activePlanet === '/jupiter'}
                $planetColor="hsl(2, 68%, 53%)"
            />
            <Saturn
                to="/saturn"
                aria-label="Saturn page"
                $isActive={activePlanet === '/saturn'}
                $planetColor="hsl(17, 73%, 46%)"
            />
            <Uranus
                to="/uranus"
                aria-label="Uranus page"
                $isActive={activePlanet === '/uranus'}
                $planetColor="hsl(169, 73%, 44%)"
            />
            <Neptune
                to="/neptune"
                aria-label="Neptune page"
                $isActive={activePlanet === '/neptune'}
                $planetColor="hsl(222, 87%, 56%)"
            />
            <AsteroidsBelt />
        </Container>
    );
};

export default KeyVisual;
