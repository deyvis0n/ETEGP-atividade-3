import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import DataBase from '../data/DataBase'
import Item from './Item'

export default function ListaFinancaMes({ route, navigation }) {
  const [items, setItem] = useState([])
  const [resultado, setResultado] = useState(0)

  useEffect(() => {
    DataBase.pegarTodosOsItems().then(items => {
      setItem(items)
      let valor = 0
      for (const item of items) {
        valor += item.valor
      }
      setResultado(valor)
    });
  }, [route]);

  return (
    <View>
      <Text>Movimentação no Mês</Text>
      <Text>Saldo: R${resultado}</Text>
      <Button
        title='Adicionar um novo item'
        onPress={() => navigation.navigate('Adicionar item')}
      />
      <ScrollView>
        {items.map(item => {
          return <Item
            key={item.id}
            id={item.id}
            item={item.descricao + ' ' + item.valor}
            navigation={navigation}
          />
        })}
      </ScrollView>
    </View>
  )
}