const handleGetSuperheroesPending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleGetSuperheroesFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...payload];
};

const handleGetSuperheroesRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};

export { handleGetSuperheroesPending, handleGetSuperheroesFulfilled, handleGetSuperheroesRejected };
