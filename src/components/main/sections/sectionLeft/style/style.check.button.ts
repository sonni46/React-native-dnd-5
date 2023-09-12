import { StyleSheet} from "react-native"
import { StylesViewText } from "../../../../../const/Const";

interface TClassesCheckButton {
    CheckButtonContainer : StylesViewText;
}

const Styles = ():TClassesCheckButton => { 
    return StyleSheet.create({
        CheckButtonContainer: {
            borderColor: 'red',
            borderWidth: 1
        }
    });
}

export default Styles;