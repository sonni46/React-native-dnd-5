import { View } from 'react-native';
import Stats from './sectionComponents/Stats';
import Inspiration from './sectionComponents/Inspiration';
import Styles from './style/style.sectionLeft';
import { StylesViewText } from '../../../../const/Const';



const SectionLeft = () => {
    const style = Styles();

    
    
    const stylesObj:IStylesObj = {
        StyleCheckButton     : style.StyleCheckButton,
        IspirationContainer  : style.IspirationContainer,
        TextStyle            : style.TextStyle
    }

    return (
    <View style={style.SectionLeftContainer}>
        <Stats></Stats>
        <Inspiration style={stylesObj}/>
    </View>);
}

export default SectionLeft;

export interface IStylesObj {
    StyleCheckButton     : StylesViewText;
    IspirationContainer  : StylesViewText;
    TextStyle            : StylesViewText;
}