import { StyleSheet } from 'react-native';
import { StylesViewText } from '../../../const/Const';

type TClassesInfoPlayer = {
    BoxWithBorder: StylesViewText;
    ContainerInfo: StylesViewText;
    Info         : StylesViewText;
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