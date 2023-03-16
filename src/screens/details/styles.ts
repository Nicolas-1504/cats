import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  details: {
    padding: 30,
    flex: 1,
  },
  back: {
    position: 'absolute',
    left: 30,
    top: 35,
    zIndex: 999,
  },
  title: {
    fontSize: 30,
    color: '#213c59',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: 380,
    marginVertical: 30,
    borderRadius: 18,
  },
  description: {
    fontSize: 20,
    color: '#5c7c9d',
    marginBottom: 15,
  },
});
