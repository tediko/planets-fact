import IcoMoon from 'react-icomoon';
import iconSet from '../../selection.json';

const Icon = ({ name, size, color, customStyle }) => {
    return (
        <IcoMoon
            iconSet={iconSet}
            disableFill="true"
            icon={name}
            size={size}
            color={color}
            style={customStyle}
        />
    );
};

export default Icon;
