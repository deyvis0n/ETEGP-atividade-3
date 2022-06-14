import React from 'react'
import { Text, View, Button } from 'react-native'

export default function ListaFinancaMes({ navigation }) {
  return (
    <View>
      <Text>Movimentação no Mês</Text>
      <Button
        title='Adicionar um novo item'
        onPress={() => navigation.navigate('Adicionar item')}
      />
    </View>
  )
}