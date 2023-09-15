import { StyleSheet, TextStyle,ViewStyle} from 'react-native';
import { StylesViewText } from '../../../../../const/Const';

interface IClassesChecksBox {
    ContainerChecksBox: StylesViewText;
    ContainerInput    : StylesViewText;
    StyleCheckButton  : StylesViewText;
    TextStyle         : StylesViewText;
}

const Style = ():IClassesChecksBox => {
    return StyleSheet.create({
        ContainerChecksBox: {
            display:'flex',
            flexDirection:'row',
            borderColor:'red',
            borderWidth: 1
        },
        ContainerInput: {
            borderRightColor:'red',
            borderLeftColor:'red',
            borderLeftWidth:1,
            borderRightWidth:1
        },
        StyleCheckButton:{
            padding:5
        },
        TextStyle: {
            fontSize: 20
        }

    })
}

export default Style;