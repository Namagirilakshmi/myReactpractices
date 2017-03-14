import constant from "./Constants";

const initialState = {
  dinosaurs: [],
  dinosaursData: {},
  fetchError: ""
};

const dinosaurReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.FETCH_DINOSAUR_SUCCESS:
      return {
        ...state,
        dinosaurs: Object.keys(action.dinosaurs),
        dinosaursData: action.dinosaurs,
        fetchError: ""
      };
    case constant.FETCH_DINOSAUR_FAILURE:
      return {
        ...state,
        fetchError: action.err
      };
    default:
      return state;
  }
};

export {
  initialState
};

export default dinosaurReducer;
