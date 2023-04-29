const value = "REMOVE_ITEM";

const reducers = (state, action) => {
  switch (action.type) {
    case "ADD_JOB":
      const { jobs } = action.payload;
      const newList = [...state.FavouiteList, jobs];
      return { ...state, FavouiteList: newList };
    case "REMOVE_ITEM":
      const { id } = action.payload;
      console.log("id-reducers", id);
      const removeList = state.FavouiteList.filter((item) => item.id !== id);

      return { ...state, FavouiteList: removeList };

    default:
      return state;
  }
};

export default reducers;
