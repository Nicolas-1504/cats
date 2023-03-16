import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 350,
    borderWidth: 2,
    borderColor: '#213c59',
    borderRadius: 18,
    marginVertical: 15,
    overflow: 'hidden',
    padding: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#213c59',
    fontWeight: 'bold',
  },
  more: {
    backgroundColor: 'rgba(125, 159, 181, 0.4)',
    borderRadius: 18,
    paddingHorizontal: 8,
    borderColor: '#213c59',
    borderWidth: 1,
  },
  button: {
    fontSize: 18,
    color: '#213c59',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 18,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
