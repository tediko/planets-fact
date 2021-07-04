import { Illustration, Image } from './IllustrationContainerStyles';
import earthImage from '../../../assets/images/planet-earth.svg';

const IllustrationContainer = () => {
    return (
        <Illustration>
            <Image image={earthImage} />
        </Illustration>
    );
};

export default IllustrationContainer;
