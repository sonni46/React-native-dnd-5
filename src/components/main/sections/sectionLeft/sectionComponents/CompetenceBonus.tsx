import { TextInput, View , Text } from "react-native";
import Style from "../style/style.bonus.competence";

const CompetenceBonus = () => {
    const style = Style();
    return ( 
        <View style={style.CompetenceBonusContainer}>
            <View style={style.BorderInputCompetence}>
                <TextInput/>
            </View>
            <View style={style.BorderTextCompetence}>
                <Text>Bonus competenza</Text>
            </View>
        </View>
    );
}

export default CompetenceBonus;