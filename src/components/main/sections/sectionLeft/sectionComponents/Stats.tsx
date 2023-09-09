import React, { useState } from 'react';
import { TextInput , Text, View, ViewStyle } from 'react-native';
import { RegexSimbol, StatsDataPlayer } from '../constStatsData/const.data';
import Styles from '../style/style.stats';
import setModStats from '../../../../../utilis/Utilities';


const Stats = () => {
    const [getData,setData] = useState<any[]>([]);
    const [getMod,setMod] = useState<any[]>([]);
    const style = Styles();

    const getStats = (Text:string,key:number):void => {
        let newData:any;
        const checkTest = RegexSimbol.test(Text);

        if (checkTest) {
            Text = '';
        }
        
        if (parseInt(Text) > 20) {
            Text = '20';
        }

        newData = [...getData];
        newData[key] = Text;
        setMod(setModStats(newData));
        setData(newData);
    };

    return (
    <View style={style.container}>
    {StatsDataPlayer.map((stats,index) => {
        return (
        <View key={index}>
            <Text style={style.textAlign}>{stats}</Text>
            <TextInput
            style={style.textAlign}
            onChangeText={e => getStats(e,index)}
            // keyboardType="numeric"
            value={getData && getData.length > 0 && getData[index] || ''}
            maxLength={2}
            // editable={!isProcessing}
            />
            <View style={style.modStatsContainer}>
                <Text style={style.textAlign}>{getMod && getMod.length > 0 && getMod[index] || 0}</Text>
            </View>
        </View>
        )
    })}
    </View>
    );
}

export default Stats;