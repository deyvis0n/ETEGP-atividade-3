import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import DataBase from '../data/DataBase'
import styles from '../Styles'

export default function AdicionarItem({ route,  navigation }) {

  const id = route.params ? route.params.id : undefined
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    if (!route.params) return
    console.log(route.params.valor)
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
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Item</Text>
      <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder='Descrição do item'
            clearButtonMode='always'
            onChangeText={mudarDescricao}
            value={descricao}
          />
          <TextInput
            style={styles.input}
            placeholder='Valor do item'
            keyboardType={'numeric'}
            clearButtonMode='always'
            onChangeText={mudarValor}
            value={valor}
          />
        </View>
      <View style={styles.buttonArea}>
        <Button
          title='Adicionar item'
          onPress={adicionarItem}
          value={valor.toString()}
        />
      </View>
    </View>
  )
}