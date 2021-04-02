import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 8,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  flexStart: {
    alignContent: 'flex-start',
  },
  flexEnd: {
    alignContent: 'flex-end',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  debug: {
    backgroundColor: 'black',
    color: 'green',
    width: '100%',
    padding: 2,
    marginBottom: 1,
    fontFamily: 'Menlo', // only iOS
  },
});
