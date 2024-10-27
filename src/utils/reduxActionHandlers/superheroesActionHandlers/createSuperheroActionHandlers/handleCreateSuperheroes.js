const handleCreateSuperheroesPending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleCreateSuperheroesFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleCreateSuperheroesRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export { handleCreateSuperheroesPending, handleCreateSuperheroesFulfilled, handleCreateSuperheroesRejected };
