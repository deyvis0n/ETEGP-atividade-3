import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default function AdicionarItem({ navigation }) {

  function adicionarItem() {
    navigation.navigate('Movimentação no Mês')
  }

  return (
    <View>
      <Text>Adicionar Item</Text>
      <View>
        <TextInput
          placeholder='Descrição do item'
          clearButtonMode='always'
        />
        <TextInput
          placeholder='Valor do item'
          keyboardType={'numeric'}
          clearButtonMode='always'
        />
        <Button
          title='Adicionar item'
          onPress={adicionarItem}
        />
      </View>
    </View>
  )
}