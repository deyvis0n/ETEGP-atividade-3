import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdicionarItem from './AdicionarItem'
import ListaFinancaMes from './ListaFinancaMes'

const Stack = createNativeStackNavigator()

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movimentação no Mês" component={ListaFinancaMes} />
        <Stack.Screen name="Adicionar item" component={AdicionarItem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}