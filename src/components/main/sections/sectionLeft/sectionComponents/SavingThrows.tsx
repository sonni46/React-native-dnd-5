import { View, Text, TextInput} from "react-native";
import Style from "../style/style.checks.box";
import ChecksBox from "./ChecksBox";
import { StatsDataPlayer } from "../constStatsData/const.data";

const SavingThrows = () => {
    
    return ( 
        <View>
            {StatsDataPlayer && StatsDataPlayer.length > 0 && StatsDataPlayer.map((value,index) => {
                return <ChecksBox key={index} value={value}/>
            })}
        </View>
    );
}

export default SavingThrows;