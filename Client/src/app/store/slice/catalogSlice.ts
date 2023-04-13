import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/product";
import { RootState } from "../configureStore";
import agent from "../../api/agent";

const productsAdapter = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk<Product[]>(
  'collection/fetchProductsAsync',
  async (_, thunkAPI) => {
    try {
      return await agent.Collection.list();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)

export const fetchProductAsync = createAsyncThunk<Product, number>(
  'collection/fetchProductAsync',
  async (productId, thunkAPI) => {
    try {
      return await agent.Collection.details(productId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)

export const fetchFilters = createAsyncThunk(
  'collection/fetchFilters',
  async (_, thunkApi) => {
    try {
      return agent.Collection.fetchFilters();
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error.data })
    }
  }
)

export const catalogSlice = createSlice({
  name: 'collection',
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    filtersLoaded: false,
    status: 'idle',
    brands: [],
    types: []
  }),
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = 'pendingFetchProducts';
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload);
      state.status = 'idl';
      state.productsLoaded = true;
    });
    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.status = 'idle';
    });

    builder.addCase(fetchProductAsync.pending, (state) => {
      state.status = 'pendingFetchProduct';
    });
    builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productsAdapter.upsertOne(state, action.payload)
      state.status = 'idle';
    });
    builder.addCase(fetchProductAsync.rejected, (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    });

    builder.addCase(fetchFilters.pending, (state) => {
      state.status = 'pendingFetchFilters';
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.brands = action.payload.brands;
      state.types = action.payload.types
      state.filtersLoaded = true;
      state.status = 'idle';
    });
    builder.addCase(fetchFilters.rejected, (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    });
  })
})

export const productSelectors = productsAdapter.getSelectors((state: RootState) => state.catalog);