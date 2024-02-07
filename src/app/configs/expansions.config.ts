export const expansionsConfig = [
  {
    name: 'Module 0',
    description: 'Politics',
    disabled: false,
    exclude: [],
  },
  {
    name: 'Module 1/Terrawat',
    description: 'Terrawat',
    disabled: true,
    exclude: [],
  },
  {
    name: 'Module 1/Terrawat + Futures',
    description: 'Terrawat + Futures',
    disabled: true,
    exclude: ['Module 1/Terrawat'],
  },
  {
    name: 'Module 2',
    description: 'Colonization',
    disabled: true,
    exclude: [],
  },
  {
    name: 'Module 3',
    description: 'Politics',
    disabled: true,
    exclude: [],
  },
  {
    name: 'Module 4',
    description: 'Exodus',
    disabled: true,
    exclude: [],
  },
  {
    name: 'Module 5',
    description: 'Economy',
    disabled: true,
    exclude: [],
  },
];

export const politicalBoardConfig = {
  politicalAssemblies: [
    {
      name: 'Freedom',
      color: '#801E23',
    },
    {
      name: 'Honor',
      color: '#C1C5D8',
    },
    {
      name: 'Unity',
      color: '#C1A33A',
    },
    {
      name: 'Authority',
      color: '#A092BB',
    },
    {
      name: 'Equality',
      color: '#43BCBC',
    },
    {
      name: 'Individuality',
      color: '#7A838B',
    },
    {
      name: 'Centrist',
      color: '#FFFFFF',
    },
  ],
};
