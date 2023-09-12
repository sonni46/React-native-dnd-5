import { StyleSheet } from 'react-native';
import { StylesViewText } from '../../../const/Const';


interface TClassesHeader {
    container: StylesViewText;
};

const Styles = ():TClassesHeader => { 
    return StyleSheet.create({
        container: {
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between'
        },
    });
};

export default Styles;