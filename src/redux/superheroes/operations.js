import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from '../../utils/handleErrorAsyncOperation';
import axios from 'axios';

axios.defaults.baseURL = 'https://superhero-database-backend-toy7.onrender.com';

const getSuperheroes = createAsyncThunk('superheroes/getSuperheroes', async ({ page }, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get(`/superheroes?page=${page}&limit=5`);
    return data;
  }, thunkAPI);
});

const getSuperheroById = createAsyncThunk('superheroes/getSuperheroById', async (superheroId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get(`/superheroes/${superheroId}`);
    return data;
  }, thunkAPI);
});

const createSuperhero = createAsyncThunk('superheroes/createSuperhero', async (newSuperhero, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/superheroes', newSuperhero);
    return data;
  }, thunkAPI);
});

const updateSuperhero = createAsyncThunk('superheroes/updateSuperhero', async ({ superheroId, updData }, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.patch(`/superheroes/${superheroId}`, updData);
    return data;
  }, thunkAPI);
});

const deleteSuperhero = createAsyncThunk('superheroes/deleteSuperhero', async (superheroId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.delete(`/superheroes/${superheroId}`);
    return data;
  }, thunkAPI);
});

export { getSuperheroes, deleteSuperhero, createSuperhero, updateSuperhero, getSuperheroById };
