const reducers = (state, action) => {
  switch (action.type) {
    case "ADD_JOB":
      const { jobs } = action.payload;
      const newList = [...state.FavouiteList, jobs];
      return { ...state, FavouiteList: newList };

    default:
      return state;
  }
};

export default reducers;
