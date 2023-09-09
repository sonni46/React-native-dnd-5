import { useState } from 'react';
import { TextInput , Text, View, ViewStyle, Touchable, TouchableOpacity } from 'react-native';


const Inspiration = () => {
    
    const changeColor = () => {
        console.log('ok')
    }

    return (
    <View>
        <TouchableOpacity
        // style={}
        onPress={changeColor}
        />
    </View>);
}

export default Inspiration;