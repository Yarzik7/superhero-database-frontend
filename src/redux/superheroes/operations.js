import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from '../../utils/handleErrorAsyncOperation';
import axios from 'axios';

// axios.defaults.baseURL = 'https://superhero-database-backend-toy7.onrender.com';
axios.defaults.baseURL = 'https://superhero-database-backend-production.up.railway.app';

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

const createSuperhero = createAsyncThunk(
  'superheroes/createSuperhero',
  async ({ superheroData, superheroImageData }, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data: createdSuperheroData } = await axios.post('/superheroes', superheroData);
      let imageUploadError = null;

      if (superheroImageData.has('superhero_image')) {
        try {
          superheroImageData.append('superheroId', createdSuperheroData._id);
          const { data: createdSuperheroImageData } = await axios.post('/superheroimages', superheroImageData);
          createdSuperheroData.images = createdSuperheroImageData;
        } catch (e) {
          imageUploadError = e.JSON();
        }
      }

      return { createdSuperheroData, imageUploadError };
    }, thunkAPI);
  }
);

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

const createSuperheroImage = createAsyncThunk(
  'superheroes/createSuperheroImage',
  async (superheroImageData, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data } = await axios.post('/superheroimages', superheroImageData);
      return data;
    }, thunkAPI);
  }
);

const deleteSuperheroImage = createAsyncThunk(
  'superheroes/deleteSuperheroImage',
  async (superheroImageId, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data } = await axios.delete(`/superheroimages/${superheroImageId}`);
      return data;
    }, thunkAPI);
  }
);

export {
  getSuperheroes,
  deleteSuperhero,
  createSuperhero,
  updateSuperhero,
  getSuperheroById,
  createSuperheroImage,
  deleteSuperheroImage,
};
