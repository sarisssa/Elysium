import SearchbarActionTypes from "./searchbar.types";

const INITIAL_STATE = {
    hidden: true
};

const searchbarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SearchbarActionTypes.TOGGLE_SEARCHBAR_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden 
        };
      default:
        return state;
    }
  };
  
  export default searchbarReducer;