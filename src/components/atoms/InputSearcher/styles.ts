import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#213c59',
    borderRightWidth: 0,
    height: 50,
    padding: 10,
    fontSize: 20,
    color: '#051919',
    flex: 1,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  icon: {
    borderWidth: 2,
    borderColor: '#213c59',
    height: 50,
    borderLeftWidth: 0,
    justifyContent: 'center',
    borderBottomEndRadius: 18,
    borderTopEndRadius: 18,
    paddingRight: 5,
  },
});
