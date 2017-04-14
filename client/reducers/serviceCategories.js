const serviceCategories = (state = [], action) => {
  switch(action.type) {
    case 'SERVICE_CATEGORIES':
      return action.categories;
    case 'ADD_SERVICE_CATEGORY':
      return [...state, action.category]
    case 'REMOVE_SERVICE_CATEGORY':
      return state.filter( c => c.id !== action.id )
    case 'ADD_SERVICE':
      return state.map( sc => {
        if(sc.id === action.service_category_id)
          return {...sc, services: [...sc.services, action.service]}
        else
          return sc
      });
    case 'DELETE_SERVICE':
      return state.map( sc => {
        if(sc.id === action.categoryId)
          return {...sc, services: sc.services.filter(s => { return s.id !== action.id } )}
        else
          return sc
      });
    default:
      return state;
  }
}

export default serviceCategories
