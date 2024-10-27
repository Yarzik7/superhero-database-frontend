const handleUpdateSuperheroesPending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleUpdateSuperheroesFulfilled = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  const idx = state.items.findIndex(({ id }) => id === payload.id);
  state.items[idx] = { ...state.items[idx], ...payload };
};

const handleUpdateSuperheroesRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export { handleUpdateSuperheroesPending, handleUpdateSuperheroesFulfilled, handleUpdateSuperheroesRejected };
