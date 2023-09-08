import { ReactElement } from 'react';
import { ScrollView, TextInput , Text, View, ViewProps, ViewStyle,} from 'react-native';
import InfoPlayer from './InfoPlayer/InfoPlayer';
import Styles from './style/style.header';

interface IHeaderProps {
    
}

const Header = (props:IHeaderProps) => {
    const style = Styles();
    return (<>
        <View style={style.container}>
            <InfoPlayer/>
        </View>
    </>);
}

export default Header;