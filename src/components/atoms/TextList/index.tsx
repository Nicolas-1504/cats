import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

type TProps = {
  title: string;
  subtitle: string | number;
};

const TextList = ({ title, subtitle }: TProps) => {
  return (
    <Text style={styles.title}>
      {title} <Text style={styles.subtitle}>{subtitle}</Text>
    </Text>
  );
};

export default TextList;
