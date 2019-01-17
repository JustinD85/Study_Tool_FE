
const initialState = {
  currentUser: '',
  userStatus: 'login',
  users: {},
  topics: {}
}


export default (state = initialState, action) => {
  //App.js
  
  if (action.type === 'LOAD_DATA') {
    const { users, topics } = action.payload;
    const convertObjectToMap = (obj) => {
      let map = new Map();
      for (let key of Object.keys(obj)) {
        if (obj[key] instanceof Object) {
          map.set(key, convertObjectToMap(obj[key]));
        } else {
          map.set(key, obj[key]);
        }
      }
      return map;
    }

    return { ...state, topics: convertObjectToMap(topics), users }
  }
  //Login.js
  if (action.type === "LOGIN_ICON") {
    return {
      ...state,
      currentUser: action.payload,
      userStatus:'mainContent'
    }
  }
  if (action.type === 'NEW_USER') {
    return {
      ...state, userStatus: 'createUser'
    }
  }
  return state;
}
