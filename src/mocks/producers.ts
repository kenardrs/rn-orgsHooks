const generateRandonNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers: any = {
  title: 'Producers',
  list: [
    {
      name: 'Green',
      image: require('../assets/produtores/green.png'),
      distance: generateRandonNumber(1, 500),
      stars: generateRandonNumber(1, 500),
    },
    {
      name: 'Salad',
      image: require('../assets/produtores/salad.png'),
      distance: generateRandonNumber(1, 500),
      stars: generateRandonNumber(1, 500),
    },
    {
      name: 'Jenny Jack Farm',
      image: require('../assets/produtores/jenny-jack.png'),
      distance: generateRandonNumber(1, 500),
      stars: generateRandonNumber(1, 500),
    },
    {
      name: 'Grow',
      image: require('../assets/produtores/grow.png'),
      distance: generateRandonNumber(1, 500),
      stars: generateRandonNumber(1, 500),
    },
    {
      name: 'Potager',
      image: require('../assets/produtores/potager.png'),
      distance: generateRandonNumber(1, 500),
      stars: generateRandonNumber(1, 500),
    },
  ],
};
export default producers;
