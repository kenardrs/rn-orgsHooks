import {useEffect, useState} from 'react';

import {loadProducers} from '../services/loadData';

const useProducers = () => {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const producers = loadProducers();
    setTitle(producers.title);
    setList(producers.list);
  }, []);

  return [title, list];
};

export default useProducers;
