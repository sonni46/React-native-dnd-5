import { View, ViewStyle,StyleProp, TextStyle } from 'react-native';
import CheckButton from './CheckButton';
import { IStylesObj } from '../SectionLeft';

interface IInspirationProps {
    style?: IStylesObj | undefined;
}

const Inspiration = (props: IInspirationProps) => {
    const fourCheckButtons = () => {
        const components = [];
            for (let i = 0; i < 4; i++) {
                components.push(<CheckButton Style={props.style} key={i} />);
            }
        return components;
    };

return (
    <View style={props.style?.IspirationContainer}>
    {fourCheckButtons()}
    </View>
);
}

export default Inspiration;


