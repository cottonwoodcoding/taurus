const serviceCategories = (state = [], action) => {
  switch(action.type) {
    case 'SERVICE_CATEGORIES':
      return action.categories;
    case 'ADD_SERVICE_CATEGORY':
      return [...state, action.category]
    case 'REMOVE_SERVICE_CATEGORY':
      return state.filter( c => c.id !== action.id )
    default:
      return state;
  }
}

export default serviceCategories
