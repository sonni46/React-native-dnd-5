import { StyleSheet } from "react-native";
import { StylesViewText } from "../../../../../const/Const";

interface IClassesCompetenceBonus {
    CompetenceBonusContainer:StylesViewText;
    BorderInputCompetence   :StylesViewText;
    BorderTextCompetence    :StylesViewText;
}

const Style = ():IClassesCompetenceBonus => {
    return StyleSheet.create({
        CompetenceBonusContainer : {
            display: 'flex',
            flexDirection: 'row',
        },
        BorderInputCompetence: {
            width: '15%',
            borderColor: 'red',
            borderWidth: 1,
            padding:5,
            textAlign:'center'

        },
        BorderTextCompetence: {
            borderColor: 'red',
            borderWidth: 1,
            padding:3,
        }
    });
}

export default Style;