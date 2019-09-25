const initState = {
  projects: [
    {
      id: '1',
      title_pt: 'Guardiões da Galáxia',
      title_eng: 'Guardians of The Galaxy',
      category: 'Filme',
      media_type: 'Blu-ray 3D, Blu-ray, DVD'
    },
    {
      id: '2',
      title_pt: 'Vingadores: Gerra Infinita',
      title_eng: 'Avengers: Infinity War',
      category: 'Filme',
      media_type: 'Blu-ray 3D, Blu-ray, DVD'
    },
    {
      id: '3',
      title_pt: 'Vingadores: Ultimato',
      title_eng: 'Avengers: End Game',
      category: 'Filme',
      media_type: 'Blu-ray 3D, Blu-ray, DVD'
    }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
 
};

export default projectReducer;