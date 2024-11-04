const handleDeleteSuperheroImagePending = state => {
  state.error = null;
  state.isLoading = true;
  state.isDeleting = true;
};

const handleDeleteSuperheroImageFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = null;
  const superhero = state.items.find(({ _id }) => _id === payload.superheroId);
  const superheroImageIndex = superhero.images.findIndex(({ _id }) => _id === payload._id);
  superhero.images.splice(superheroImageIndex, 1);
};

const handleDeleteSuperheroImageRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = payload;
};

export { handleDeleteSuperheroImagePending, handleDeleteSuperheroImageFulfilled, handleDeleteSuperheroImageRejected };
