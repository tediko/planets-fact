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
} from './KeyVisual.styled';

const KeyVisual = () => {
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
            <Mercury to="/mercury" aria-label="Mercury page" />
            <Venus to="/venus" aria-label="Venus page" />
            <Earth to="/earth" aria-label="Earth page" />
            <Mars to="/mars" aria-label="Mars page" />
            <Jupiter to="/jupiter" aria-label="Jupiter page" />
            <Saturn to="/saturn" aria-label="Saturn page" />
            <Uranus to="/uranus" aria-label="Uranus page" />
            <Neptune to="/neptune" aria-label="Neptune page" />
            <AsteroidsBelt />
        </Container>
    );
};

export default KeyVisual;
