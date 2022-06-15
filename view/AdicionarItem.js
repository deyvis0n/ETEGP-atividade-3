import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import DataBase from '../data/DataBase'

export default function AdicionarItem({ route,  navigation }) {

  const id = route.params ? route.params.id : undefined
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!route.params) return
    setDescricao(route.params.descricao)
    setValor(route.params.valor.toString())
  }, [route])

  function mudarDescricao(descricao) {
    setDescricao(descricao)
  }

  function mudarValor(valor) {
    setValor(valor)
  }

  function limparDb() {
    DataBase.limpardDb()
  }

  async function adicionarItem() {
    const item = { descricao, valor: parseFloat(valor)}
    await DataBase.salvarItem(item, id).then(response => navigation.navigate('Movimentação no Mês', item))
  }

  return (
    <View>
      <Text>Adicionar Item</Text>
      <View>
        <TextInput
          placeholder='Descrição do item'
          clearButtonMode='always'
          onChangeText={mudarDescricao}
          value={descricao}
        />
        <TextInput
          placeholder='Valor do item'
          keyboardType={'numeric'}
          clearButtonMode='always'
          onChangeText={mudarValor}
        />
        <Button
          title='Adicionar item'
          onPress={adicionarItem}
          value={valor.toString()}
        />
        <Button
          title='Limpar DB'
          onPress={limparDb}
        />
      </View>
    </View>
  )
}