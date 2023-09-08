import { StyleSheet } from 'react-native';
import { ViewStyle } from 'react-native';

type TClassesHeader = {
    container: ViewStyle;
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