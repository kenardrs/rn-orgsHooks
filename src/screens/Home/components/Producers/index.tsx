import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import useProducers from '../../../../hooks/useProducers';

import Producer from '../Producer';

const Producers = () => {
  const [title, list] = useProducers();

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Producer {...item} />}
      ListHeaderComponent={() => <Text>{title}</Text>}
    />
  );
};

export default Producers;
