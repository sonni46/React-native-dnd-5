import { StyleSheet } from 'react-native';
import { StyleProp,ViewStyle } from 'react-native';

type TClassesInfoPlayer = {
    BoxWithBorder: ViewStyle;
    ContainerInfo: ViewStyle;
    Info         : ViewStyle;
};

const Styles = ():TClassesInfoPlayer => { 
    return StyleSheet.create({
        BoxWithBorder: {
            borderWidth: 1, 
            borderColor: 'red', 
        },
        ContainerInfo:{
            display: 'flex',
            width: '50%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
        },
        Info: {
            width:'30%',
            borderColor: 'red', 
            borderWidth: 1, 
        }
        
    });
};


export default Styles;