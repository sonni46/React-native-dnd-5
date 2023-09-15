import { StyleSheet, TextStyle,ViewStyle} from 'react-native';
import { StylesViewText } from '../../../../../const/Const';

interface IClassesInspiration {
    TextInspirationContainer : StylesViewText;
    TextInspiration          : StylesViewText;
}

const Style = ():IClassesInspiration => {
    return StyleSheet.create({
        TextInspirationContainer : {
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center'
        },
        TextInspiration : {
            paddingLeft: 10,
            paddingRight: 10
        }
    })
}

export default Style;