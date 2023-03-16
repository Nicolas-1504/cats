import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { TCat } from '../../../services/cats/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes/StackNavigatior';
import { styles } from './styles';

type TProps = {
  cat: TCat;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Card = ({ cat }: TProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Text style={styles.subtitle}>{cat.name}</Text>
        <TouchableOpacity
          style={styles.more}
          onPress={() => navigation.navigate('Details', cat)}>
          <Text style={styles.button}>More...</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri:
            cat.image?.url ||
            'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D181180173W10000H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/linda-cara-de-gato-negro.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.data}>
        <Text style={styles.subtitle}>{cat.origin}</Text>
        <Text style={styles.subtitle}>Intelligence: {cat.intelligence}</Text>
      </View>
    </View>
  );
};

export default Card;
