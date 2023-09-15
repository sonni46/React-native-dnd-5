import { View, ViewStyle,StyleProp, TextStyle , Text } from 'react-native';
import CheckButton from './CheckButton';
import { IStylesObj } from '../SectionLeft';
import Style from '../style/style.inspiration';

interface IInspirationProps {
    style?: IStylesObj | undefined;
}

const Inspiration = (props: IInspirationProps) => {
    const style = Style();
    const fourCheckButtons = () => {
        const components = [];
            for (let i = 0; i < 4; i++) {
                components.push(<CheckButton Style={props.style} key={i} />);
            }
        return components;
    };

    return (
        <View style={props.style?.IspirationContainer}>
            <View style={props.style?.CheckButtonContainer}>
                {fourCheckButtons()}
            </View>
            <View style={style.TextInspirationContainer}>
                <Text style={style.TextInspiration}>Ispirazione</Text>
            </View>
        </View>
    );
}

export default Inspiration;


