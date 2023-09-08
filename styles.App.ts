import { StyleSheet } from 'react-native';
import { StyleProp,ViewStyle } from 'react-native';

type TClassesApp = {
    container: ViewStyle;
};

const Styles = ():TClassesApp => { 
    return StyleSheet.create({
        container: {
            width:'95%',
            marginLeft:'auto',
            marginRight:'auto'
        },
    });
};


export default Styles;



