/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { cloneElement, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  const [savePassword, setSavePassword] = useState(true)

  const onPressSavePassword = () => {
    setSavePassword(!savePassword);
  }

  const onSignIn = async () =>  {
    try {
      const response = await fetch(
        'http://jsonplaceholder.typicode.com/posts',
      );
      const json = await response.json();
      Alert.alert(json[1].id+'');
      return json.movies;
    } catch (error) {
      Alert.alert(error + '');
    }
  }

  return (
    <SafeAreaView style={styles.centerView}>
      <Text style={styles.text}>Авторизация</Text>
      <TextInput style={styles.input} placeholder='Логин'></TextInput>
      <TextInput style={styles.input} placeholder='Пароль'></TextInput>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
        <Pressable onPress={onPressSavePassword} style={[{backgroundColor: savePassword ? '#ddd' : Colors.transparent }, styles.checkBox]}></Pressable>
        <Text onPress={onPressSavePassword} style={{fontSize: styles.checkBox.fontSize, marginLeft: 5}}>Сохранить вход</Text>
      </View>
      <Pressable onPress={onSignIn}>
        <Text style={{ color: Colors.black, fontSize: 18, margin: 25, borderWidth: 1, paddingHorizontal: 10, borderRadius: 20 }}>
          Войти
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

function onPressLearnMore() {
  Alert.prompt('ad');
}

const styles = StyleSheet.create({
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.9
  },
  checkBox: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    fontSize: 16,
  },
  text: {
    fontSize: 24,
    color: Colors.black,
    marginBottom: 50
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    margin: 5,
    width: '75%',
  },
});

export default App;
