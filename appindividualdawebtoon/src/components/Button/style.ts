import { Dimensions, StyleSheet } from "react-native";


export const botao = StyleSheet.create({
    container: {
      width: '78%',
      height: '6%',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#1ED760',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 7,
        overflow: 'hidden'
    },
    container2: {
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: 'center',

    },

    textStyle: {
      fontSize: 25,
      color: 'white',
    }
})