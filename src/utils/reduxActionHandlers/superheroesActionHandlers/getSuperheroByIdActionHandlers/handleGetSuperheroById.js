const handleGetSuperheroByIdPending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleGetSuperheroByIdFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleGetSuperheroByIdRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export { handleGetSuperheroByIdPending, handleGetSuperheroByIdFulfilled, handleGetSuperheroByIdRejected };
