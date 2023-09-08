import { StyleSheet, TextStyle,ViewStyle} from 'react-native';

type TClassesStats = {
    container: ViewStyle;
    textAlign: TextStyle;
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
        }
    });
};

export default Styles;