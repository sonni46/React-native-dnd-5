import { ScrollView,Text, View ,StatusBar } from 'react-native';
import Styles from '../dnd5/styles.App';
import Header from './src/components/header/Header';
import Main from './src/components/main/Main';

export default function App() {
  const styles = Styles();

  return (
    <ScrollView>
      <StatusBar></StatusBar>
      <View style={styles.container}>
        <Header/>
      </View>
      <View style={styles.container}>
        <Main></Main>
      </View>
    </ScrollView>
  );
}


