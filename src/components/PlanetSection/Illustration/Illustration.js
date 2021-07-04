import { Illustration, Image } from './IllustrationStyles';
import earthImage from '../../../assets/images/planet-earth.svg';

const IllustrationContainer = () => {
    return (
        <Illustration>
            <Image image={earthImage} />
        </Illustration>
    );
};

export default IllustrationContainer;
