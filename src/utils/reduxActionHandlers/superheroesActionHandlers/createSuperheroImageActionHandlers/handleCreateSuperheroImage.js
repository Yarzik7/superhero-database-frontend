const handleCreateSuperheroImagePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleCreateSuperheroImageFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleCreateSuperheroImageRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export { handleCreateSuperheroImagePending, handleCreateSuperheroImageFulfilled, handleCreateSuperheroImageRejected };
