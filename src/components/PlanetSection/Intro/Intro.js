import { Intro, Title, Text, SourceContainer, Span, Link } from './IntroStyles';
import Icon from '../../Icon/Icon';

const IntroContainer = () => {
    return (
        <Intro>
            <Title>Earth</Title>
            <Text>
                Third planet from the Sun and the only known planet to harbor
                life. About 29.2% of Earth's surface is land with remaining
                70.8% is covered with water. Earth's distance from the Sun,
                physical properties and geological history have allowed life to
                evolve and thrive.
            </Text>
            <SourceContainer>
                <Span>Source: </Span>
                <Link href="http://wikipedia.com">
                    Wikipedia{' '}
                    <Icon name="source" size={12} color="hsl(240, 6%, 54%)" />
                </Link>
            </SourceContainer>
        </Intro>
    );
};

export default IntroContainer;
