import { StyleSheet, TextStyle,ViewStyle} from 'react-native';
import { StylesViewText } from '../../../../../const/Const';

interface TClassesStats {
    container           : StylesViewText;
    textAlign           : StylesViewText;
    modStatsContainer   : StylesViewText;
};

const Styles = ():TClassesStats => { 
    return StyleSheet.create({
        container: {
            width: '10%',
            borderColor:'red',
            borderWidth:1
        },
        textAlign:{
            textAlign:'center'
        },
        modStatsContainer : {
            borderColor:'red',
            borderWidth:1
        }
    });
};

export default Styles;