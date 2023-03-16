import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color="#213c59" size={50} />
    </View>
  );
};

export default Loader;
