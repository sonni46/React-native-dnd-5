import { TextInput, View, Text } from "react-native";
import CheckButton from "./CheckButton";
import Style from "../style/style.checks.box";
import { StylesViewText } from "../../../../../const/Const";

interface IChecksBox {
    value?:string | undefined;
}

const ChecksBox = (props:IChecksBox) => {
    const style = Style();

    const styleObj:IstyleObjChecksBox = {
        StyleCheckButton:style.StyleCheckButton,
        TextStyle:style.TextStyle
    }
    
    return ( 
        <View style={style.ContainerChecksBox}>
            <View>
                <CheckButton Style={styleObj} />
            </View>
            <View style={style.ContainerInput}>
                <TextInput />
            </View>
            <View>
                <Text>{props.value}</Text>
            </View>
        </View>
        );
}

export interface IstyleObjChecksBox {
    StyleCheckButton:StylesViewText;
    TextStyle       ?:StylesViewText;
}

export default ChecksBox;