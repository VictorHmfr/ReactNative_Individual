import React, { useState } from 'react'
import { FlatList, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { webtoon } from './style';
import { Button } from '../../components/Button/index'
import { TextInputComponent } from '../../components/TextInput';
import Logo from '../../assets/Logo.svg.png'

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    alert("Logado com sucesso!")
  }

  const handleEmail = (value: string) => {
    setEmail(value)
    console.log('Valor do email: ' + value)
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
          height: '25.8%',
        }} />
        <Text style={webtoon.title}>Spotify</Text>
        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Digite seu email..."
        />
        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Digite sua senha..."
          recebendoTipoDoInput={true}
        />
        <Button title={"Entrar"} recebendoFuncao={handleLogin}/>
    </View>
    </TouchableWithoutFeedback>
  )
}
