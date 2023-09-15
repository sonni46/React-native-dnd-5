import { StyleSheet} from "react-native"
import { StylesViewText } from "../../../../../const/Const";

interface TClassesSectionLeft {
    SectionLeftContainer : StylesViewText;
    IspirationContainer  : StylesViewText;
    StyleCheckButton     : StylesViewText;
    TextStyle            : StylesViewText;
    CheckButtonContainer : StylesViewText;
}

const Styles = ():TClassesSectionLeft => { 
    return StyleSheet.create({
        SectionLeftContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        CheckButtonContainer: {
            width: '35%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        StyleCheckButton : {
            width: 30,
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
        },
        TextStyle: {
            fontSize: 20,
            textAlign : 'center',
        },
        IspirationContainer: {
            display: 'flex',
            flexDirection: 'row',
        }
    });
}

export default Styles;