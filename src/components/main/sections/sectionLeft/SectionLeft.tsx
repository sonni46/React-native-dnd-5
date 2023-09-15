import { View } from 'react-native';
import Stats from './sectionComponents/Stats';
import Inspiration from './sectionComponents/Inspiration';
import Styles from './style/style.sectionLeft';
import { StylesViewText } from '../../../../const/Const';
import CompetenceBonus from './sectionComponents/CompetenceBonus';
import SavingThrows from './sectionComponents/SavingThrows';



const SectionLeft = () => {
    const style = Styles();

    const stylesObj:IStylesObjSectionLeft = {
        StyleCheckButton     : style.StyleCheckButton,
        IspirationContainer  : style.IspirationContainer,
        TextStyle            : style.TextStyle,
        CheckButtonContainer : style.CheckButtonContainer
    }

    return (
    <View style={style.SectionLeftContainer}>
        <Stats></Stats>
        <View style={{width:'20%'}}>
            <Inspiration style={stylesObj}/>
            <CompetenceBonus/>
            <SavingThrows/>
        </View>
    </View>);
}

export default SectionLeft;

export interface IStylesObjSectionLeft {
    StyleCheckButton     ?: StylesViewText;
    IspirationContainer  ?: StylesViewText;
    TextStyle            ?: StylesViewText;
    CheckButtonContainer ?: StylesViewText;
}