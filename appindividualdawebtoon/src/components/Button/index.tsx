import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { botao } from './style'
import { PropsButton } from './type'
import { LinearGradient } from 'expo-linear-gradient';

export function Button({recebendoFuncao, title}: PropsButton) {

  return (
    <View style={botao.container}>
      <TouchableOpacity style={botao.container2} onPress={recebendoFuncao}>
      <LinearGradient
        colors={['#1ED760', '#1ED760', '#0B5828']}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}
        style={botao.container2}
      >
        <Text style={botao.textStyle}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}