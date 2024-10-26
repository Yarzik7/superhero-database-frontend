const selectSuperheroes = state => state.superheroes.items;
const selectIsLoading = state => state.superheroes.isLoading;
const selectError = state => state.superheroes.error;

export { selectSuperheroes, selectIsLoading, selectError };
