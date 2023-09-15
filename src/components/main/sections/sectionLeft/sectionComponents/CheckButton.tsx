import { useState } from "react";
import { View , Text, } from "react-native";
import { IStylesObjSectionLeft } from "../SectionLeft";
import { IstyleObjChecksBox } from "./ChecksBox";


interface ICheckButtonProps {
    Style?:IStylesObjSectionLeft | IstyleObjChecksBox |undefined;
}

const CheckButton = (props:ICheckButtonProps) => {
    const [isCheck,setIsCheck] = useState<boolean>(false);

    return (
    <View style={props.Style?.StyleCheckButton}>
        <Text style={props.Style?.TextStyle} onPress={() => setIsCheck(!isCheck)} >{isCheck ? 'x' : '0'}</Text>
    </View>);
}


export default CheckButton;