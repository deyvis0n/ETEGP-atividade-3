import React from 'react'
import { Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import styles from '../Styles'
import Database from '../data/DataBase'

export default function Item(props) {
  const window = useWindowDimensions()

  async function editar() {
    const item = await Database.pegarItemPorId(props.id)
    props.navigation.navigate('Adicionar item' , item)  
  }

  function deletarItem() {
    Database.deletarItemPorId(props.id).then(response => props.navigation.navigate('Movimentação no Mês', {id: props.id}))
  }

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.itemFlexContainer,  window.width <= 500 ? styles.collumContainer : styles.rowContainer]}>
        <View style={[styles.itemsText, window.width <= 500 ? styles.itemWC : undefined]}>
          <Text style={styles.itemDescricao}>{props.descricao}</Text>
          <Text style={styles.itemValor}>
            R$: 
            <Text style={props.valor < 0 ? styles.colorRed:undefined}>
              {props.valor}
            </Text>
          </Text>
        </View>
        <View style={[styles.itemButtons, window.width <= 500 ? styles.itemWC : undefined]}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={editar}
          >
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={deletarItem}
          >
            <Text>Deletar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}