import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  usersList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  flexStart: {
    alignContent: 'flex-start',
    flexGrow: 1,
    padding: 10,
  },
  flexEnd: {
    alignContent: 'flex-end',
    flexGrow: 1,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  userDetail: {
    padding: 10,
    fontSize: 18,
    marginBottom: 8,
  },
});
