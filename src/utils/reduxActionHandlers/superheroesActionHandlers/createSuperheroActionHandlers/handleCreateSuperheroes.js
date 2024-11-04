const handleCreateSuperheroesPending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleCreateSuperheroesFulfilled = (state, { payload: { createdSuperheroData, imageUploadError } }) => {
  state.isLoading = false;
  state.error = imageUploadError;
  state.items.push(createdSuperheroData);
};

const handleCreateSuperheroesRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export { handleCreateSuperheroesPending, handleCreateSuperheroesFulfilled, handleCreateSuperheroesRejected };
