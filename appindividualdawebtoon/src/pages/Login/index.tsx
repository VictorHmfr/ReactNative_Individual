import React, { useState } from 'react'
import { FlatList, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { webtoon } from './style';
import { Button } from '../../components/Button/index'
import { TextInputComponent } from '../../components/TextInput';
import Logo from '../../assets/Logo.svg.png'

export function Login() {

  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (user === '' || password === ''){
      alert("Usuário ou senha inválidos!")
    } else {
    alert("Logado com sucesso!")
    }
  }

  const handleUser = (value: string) => {
    setUser(value)
    console.log('Valor do usuário: ' + value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    console.log('Valor da senha: ', value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={webtoon.container}>
        <Image 
        source={Logo}
        style={{
          width: '53%',
          height: '26.5%',
        }} />
        <Text style={webtoon.title}>Spotify</Text>
        <TextInputComponent
          recebendoFuncao={handleUser}
          recebendoValue={user}
          recebendoPlaceHolder="Username"
        />
        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Password"
          recebendoTipoDoInput={true}
        />
        <Button title={"Entrar"} recebendoFuncao={handleLogin}/>
    </View>
    </TouchableWithoutFeedback>
  )
}
