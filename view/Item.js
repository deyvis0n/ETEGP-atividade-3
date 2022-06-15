import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Item(props) {

  return (
    <View>
      <Text>{props.item}</Text>
    </View>
  )
}