import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/StackNavigatior';
import Icon from 'react-native-vector-icons/Feather';
import TextList from '../../components/atoms/TextList';
import { styles } from './styles';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();

  return (
    <View style={styles.details}>
      <View style={styles.back}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-left" size={35} color="#213c59" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title} adjustsFontSizeToFit>
        {route.params.name}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri:
            route.params.image?.url ||
            'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D181180173W10000H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/linda-cara-de-gato-negro.jpg',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>{route.params.description}</Text>
        <TextList title="Origin: " subtitle={route.params.origin} />
        <TextList title="Energy level: " subtitle={route.params.energy_level} />
        <TextList title="Intelligence: " subtitle={route.params.intelligence} />
        <TextList
          title="Hypoallergenic: "
          subtitle={route.params.hypoallergenic}
        />
        <TextList
          title="Stranger friendly: "
          subtitle={route.params.stranger_friendly}
        />
        <TextList title="Temperament: " subtitle={route.params.temperament} />
      </ScrollView>
    </View>
  );
};

export default Details;
