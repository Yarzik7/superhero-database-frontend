const selectSuperheroes = state => state.superheroes.items;
const selectIsLoading = state => state.superheroes.isLoading;
const selectCurrentSuperheroId = state => state.superheroes.currentSuperheroId;
const selectError = state => state.superheroes.error;

export { selectSuperheroes, selectIsLoading, selectError, selectCurrentSuperheroId };
