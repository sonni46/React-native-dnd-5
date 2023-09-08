import {  TextInput , Text, View, ViewStyle,} from 'react-native';
import Styles from '../style/style.infoPlayer';
import { infoPlayerData } from '../constPlayerData/const.data';


interface IInfoPlayerProps {

}

const InfoPlayer = (props:IInfoPlayerProps) => {
    const style = Styles();
    return (<>
        <View style={style.BoxWithBorder}>
            <TextInput
            placeholder="Nome Personaggio"
            />
        </View>
        <View style={style.ContainerInfo}>
            {infoPlayerData.map(info => {
                return (
                <View key={info} style={style.Info}>
                    <TextInput
                        placeholder={info}
                    />
                </View>);
            })}
        </View>
    </>);
}

export default InfoPlayer;