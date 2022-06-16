import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, useWindowDimensions } from 'react-native'
import DataBase from '../data/DataBase'
import Item from './Item'
import styles from '../Styles'

export default function ListaFinancaMes({ route, navigation }) {
  const [items, setItem] = useState([])
  const [entrada, setEntrada] = useState(0)
  const [saida, setSaida] = useState(0)
  const [saldo, setSaldo] = useState(0)
  const window = useWindowDimensions()

  useEffect(() => {
    DataBase.pegarTodosOsItems().then(items => {
      setItem(items)
      let entrada = 0
      let total = 0
      let saida = 0
      for (const item of items) {
        item.valor < 0 ? saida += item.valor : entrada += item.valor
      }
      total = entrada + saida
      setEntrada(entrada)
      setSaida(saida)
      setSaldo(total)
    });
  }, [route]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Movimentação no Mês</Text>
      <View style={[styles.resultadoContainer, window.width <= 500 ? styles.collumContainer : styles.rowContainer]}>
        <Text style={styles.resultadoBox}>Entrada: R${entrada}</Text>
        <Text style={styles.resultadoBox}>Saida: R${saida}</Text>
        <Text style={styles.resultadoBox}>
          Saldo: R$
          <Text style={saldo < 0 ? styles.colorRed:undefined}>
            {saldo}
          </Text>
        </Text>
      </View>
      <View style={styles.buttonArea}>
        <Button
          title='Adicionar um novo item'
          onPress={() => navigation.navigate('Adicionar item')}
        />
      </View>
      <ScrollView 
        style={styles.scrollContainer}  
        contentContainerStyle={styles.itemsContainer}
      >
        {items.map(item => {
          return <Item
            key={item.id}
            id={item.id}
            descricao={item.descricao}
            valor={item.valor}
            navigation={navigation}
          />
        })}
      </ScrollView>
    </View>
  )
}