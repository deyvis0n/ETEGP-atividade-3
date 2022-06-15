import AsyncStorage from '@react-native-async-storage/async-storage'

class DataBase {
  async salvarItem(item, id) {
    item.id = id ? id : new Date().getTime()
    const itemsSalvos = await this.pegarTodosOsItems()
    if (id) {
      const itemId = await itemsSalvos.findIndex(item => item.id === id)
      itemsSalvos[index] = item
    } else {
      itemsSalvos.push(item)
    }
    return AsyncStorage.setItem('items', JSON.stringify(itemsSalvos))
  }

  async pegarTodosOsItems() {
    return AsyncStorage.getItem('items').then(response => {
      if (response)
        return Promise.resolve(JSON.parse(response))
      return Promise.resolve([])
    })
  }

  async pegarItemPorId(id) {
    const itemSalvo = await this.pegarTodosOsItems()
    return itemSalvo.find(item => item.id === id)
  }

  async deletarItemPorId(id) {
    const itemSalvo = await this.pegarTodosOsItems()
    const itemId = await itemSalvo.findIndex(item => item.id === id)
    const semItemDeletado = itemSalvo.splice(itemId, 1)
    return AsyncStorage.setItem('items', JSON.stringify(semItemDeletado))
  }

  async limpardDb() {
    return AsyncStorage.clear()
  }
}

export default new DataBase()