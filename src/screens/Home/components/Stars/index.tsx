import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Star from '../Star';

const Stars = ({quantity: oldQuantity, editable = false, big = false}) => {
  const [quantity, setQuantity] = useState(oldQuantity);

  const RenderStars = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          disabled={!editable}
          isFilled={i < quantity}
          big={big}
        />,
      );
    }
    return starsList;
  };

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  );
};

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});

export default Stars;
