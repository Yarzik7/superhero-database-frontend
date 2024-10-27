const handleDeleteSuperheroesPending = (state, action) => {
  state.error = null;
  state.isLoading = true;
  state.isDeleting = true;
  state.currentSuperheroId = action.meta.arg;
};

const handleDeleteSuperheroesFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = null;
  const index = state.items.findIndex(({ _id }) => _id === payload._id);
  state.items.splice(index, 1);
  state.currentSuperheroId = null;
};

const handleDeleteSuperheroesRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = payload;
  state.currentSuperheroId = null;
};

export { handleDeleteSuperheroesPending, handleDeleteSuperheroesFulfilled, handleDeleteSuperheroesRejected };
