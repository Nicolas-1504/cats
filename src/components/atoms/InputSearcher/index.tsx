import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

type TProps = {
  value: string | undefined;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  onPress: () => void;
};

const InputSearcher = ({
  value,
  onChangeText,
  placeholder,
  onPress,
}: TProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
          <Icon name="search-outline" size={30} color="#213c59" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputSearcher;
