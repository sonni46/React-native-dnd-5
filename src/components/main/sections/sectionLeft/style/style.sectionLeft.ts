import { StyleSheet} from "react-native"
import { StylesViewText } from "../../../../../const/Const";

interface TClassesSectionLeft {
    SectionLeftContainer : StylesViewText;
    IspirationContainer  : StylesViewText;
    StyleCheckButton     : StylesViewText;
    TextStyle            : StylesViewText;
}

const Styles = ():TClassesSectionLeft => { 
    return StyleSheet.create({
        SectionLeftContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        IspirationContainer: {
            width: '7.4%',
            height:'10%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        StyleCheckButton : {
            width: 30,
            borderColor: 'red',
            borderWidth: 1,
        },
        TextStyle: {
            textAlign : 'center',
        }
    });
}

export default Styles;