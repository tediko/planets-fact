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
            <Mercury />
            <Venus />
            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
            <AsteroidsBelt />
        </Container>
    );
};

export default KeyVisual;
