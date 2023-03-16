import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from '../../components/atoms/Card';
import Loader from '../../components/atoms/Loader';
import useCats from '../../hooks/useCats';
import { useState, useEffect, useRef } from 'react';
import { TCat } from '../../services/cats/types';
import InputSearcher from '../../components/atoms/InputSearcher/index';
import SplashScreen from 'react-native-splash-screen';
import { styles } from './styles';

const Home = () => {
  const { cats, isLoading } = useCats();
  const [filter, setFilter] = useState<TCat[]>([]);
  const [state, setState] = useState('');
  const [isMatch, setIsMatch] = useState(true);
  const firstRender = useRef(false);

  const filterCats = () => {
    setFilter([]);
    cats.filter(cat => {
      if (cat.name.toUpperCase().includes(state.toUpperCase())) {
        setFilter(prevState => [...prevState, cat]);
      }
    });
    setState('');
  };

  useEffect(() => {
    if (firstRender.current) {
      if (filter.length === 0) {
        setIsMatch(false);
        return;
      }
      setIsMatch(true);
    } else {
      firstRender.current = true;
      SplashScreen.hide();
    }
  }, [filter]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.home}>
      <Text style={styles.title}>Catbreeds</Text>
      <InputSearcher
        value={state}
        onChangeText={setState}
        onPress={() => filterCats()}
        placeholder="Enter the cat's breed"
      />
      {!isMatch && filter.length === 0 && (
        <Text style={styles.empty}>No results, try another breed.</Text>
      )}
      {!isLoading && isMatch && (
        <FlatList
          data={filter.length > 0 ? filter : cats}
          keyExtractor={cat => cat.id}
          renderItem={({ item }) => <Card cat={item} />}
          showsVerticalScrollIndicator={false}
          initialNumToRender={30}
        />
      )}
    </View>
  );
};

export default Home;
