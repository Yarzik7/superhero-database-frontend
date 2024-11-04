import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from '../../utils/handleErrorAsyncOperation';
import axios from 'axios';

// axios.defaults.baseURL = 'https://superhero-database-backend-toy7.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001';

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
      // console.log('createdSH: ', createdSuperheroData);
      let imageUploadError = null;

      if (superheroImageData.has('superhero_image')) {
        try {
          superheroImageData.append('superheroId', createdSuperheroData._id);
          // console.log('shim: ', [...superheroImageData.entries()]);
          const { data: createdSuperheroImageData } = await axios.post('/superheroimages', superheroImageData);
          // console.log('createdSHImg: ', createdSuperheroImageData);
          createdSuperheroData.images = createdSuperheroImageData;
          console.log('createdSHD: ', createdSuperheroData);
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
  async (newSuperheroImages, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data } = await axios.post('/superheroes/superheroimages', newSuperheroImages);
      return data;
    }, thunkAPI);
  }
);

export { getSuperheroes, deleteSuperhero, createSuperhero, updateSuperhero, getSuperheroById, createSuperheroImage };
