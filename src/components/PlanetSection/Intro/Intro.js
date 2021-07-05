import { Intro, Title, Text, SourceContainer, Span, Link } from './IntroStyles';
import Icon from '../../Icon/Icon';

const IntroContainer = ({ planetData, currentData, isChanging }) => {
    return (
        <Intro>
            <Title>{planetData.name}</Title>
            <Text isChanging={isChanging}>{currentData.content}</Text>
            <SourceContainer>
                <Span>Source: </Span>
                <Link href={currentData.source}>
                    Wikipedia
                    <Icon name="source" size={12} color="hsl(240, 6%, 54%)" />
                </Link>
            </SourceContainer>
        </Intro>
    );
};

export default IntroContainer;
