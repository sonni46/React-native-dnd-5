import { useEffect, useState } from "react";
import { View , Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import Styles from "../style/style.check.button";
import { IStylesObj } from "../SectionLeft";


interface ICheckButtonProps {
    Style?:IStylesObj | undefined;
}

const CheckButton = (props:ICheckButtonProps) => {
    const [isCheck,setIsCheck] = useState<boolean>(false);
    const style = Styles();
    const changeColor = () => {
        setIsCheck(!isCheck);
    }

    return (
    <View style={props.Style?.StyleCheckButton}>
        <Text style={props.Style?.TextStyle} onPress={changeColor}>{isCheck ? 'x' : '0'}</Text>
        {/* <TouchableOpacity
        // style={}
        onPress={changeColor}
        ></TouchableOpacity> */}
    </View>);
}


export default CheckButton;