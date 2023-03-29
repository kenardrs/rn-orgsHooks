import React, {useMemo, useReducer} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Stars from '../Stars';

const meterDistance = (distance: number) => {
  return `${distance}m`;
};

const Producer = ({name, image, distance, stars}) => {
  const [selected, invertSelected] = useReducer(selected => !selected, false);

  const textDistance = useMemo(() => meterDistance(distance), [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={invertSelected}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />
      <View style={styles.infos}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantity={stars} editable={selected} big={selected} />
        </View>
        <Text style={styles.distance}>{textDistance}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // Android
    elevation: 4,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default Producer;
