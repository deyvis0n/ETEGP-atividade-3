import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemsContainer: {
    flex: 1,
  },
  resultadoContainer: {
    width: '90%',
    textAlign: 'left',
    maxWidth: 700,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    flex: 1,
    width: '90%',
    maxWidth: '700px'
  },
  itemFlexContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5
  },
  rowContainer: {
    flexDirection: 'row'
  },
  collumContainer: {
    flexDirection: 'collum'
  },
  titulo: {
    fontSize: 28,
    padding: 10
  },
  input: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  inputArea: {
    width: '90%',
    maxWidth: 700
  },
  resultadoBox: {
    width: '100%',
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'yellow',
  },
  buttonArea: {
    width: '90%',
    maxWidth: 700,
    marginTop: 10,
    marginBottom: 5
  },
  colorRed: {
    color: 'red'
  },
  itemDescricao: {
    width: '60%',
    textAlign: 'left',
    paddingLeft: 20
  },
  itemValor: {
    width: '40%',
    textAlign: 'left'
  },
  itemButtons: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'right'
  },
  itemWC: {
    width: '100%'
  },
  itemsText: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    height: 40
  },
  editButton: {
    height: 40,
    width: '50%',
    backgroundColor: 'blue',
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#ccc',
    alignItems: 'center'
  },
  deleteButton: {
    height: 40,
    width: '50%',
    backgroundColor: 'red',
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#ccc',
    alignItems: 'center'
  }
})

export default styles