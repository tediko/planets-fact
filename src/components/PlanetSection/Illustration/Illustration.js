import { Illustration, Image } from './IllustrationStyles';

const IllustrationContainer = ({ planetData, currentData, isChanging }) => {
    return (
        <Illustration>
            <Image
                image={currentData.image}
                geo={currentData.geo ? currentData.geo : false}
                desktopImgWidth={planetData.desktopImgWidth}
                tabletImgWidth={planetData.tabletImgWidth}
                mobileImgWidth={planetData.mobileImgWidth}
                isChanging={isChanging ? true : false}
            />
        </Illustration>
    );
};

export default IllustrationContainer;
