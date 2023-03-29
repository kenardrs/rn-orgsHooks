import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import star from '../../../../assets/estrela.png';
import enabledStar from '../../../../assets/estrelaCinza.png';

const Star = ({onPress, disabled = true, isFilled, big = false}) => {
  const styles = stylesFunction(big);
  const getImage = () => {
    if (isFilled) {
      return star;
    }
    return enabledStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
};

const stylesFunction = (big: boolean) =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
    },
  });

export default Star;
