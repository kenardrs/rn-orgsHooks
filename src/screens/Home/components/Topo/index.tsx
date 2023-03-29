import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {loadTopo} from '../../../../services/loadData';

const Topo = () => {
  const [topo, setTopo] = useState(Object);

  useEffect(() => {
    setTopo(loadTopo());
  }, [topo]);

  return (
    <View style={styles.topo}>
      <Image
        source={require('../../../../assets/logo.png')}
        style={styles.image}
      />
      <Text style={styles.greetings}>{topo.greetings}</Text>
      <Text style={styles.subtitles}>{topo.subtitles}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  greetings: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitles: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Topo;
