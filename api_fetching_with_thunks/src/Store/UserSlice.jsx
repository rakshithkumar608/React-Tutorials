import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const getAllProducts = createAsyncThunk('/getAllProducts', async() =>{
  const response = await axios.get('https://dummyjson.com/products');
  const data = await response.data;
  return data;
})

const UserSlice = createSlice({
  name:'user',
  initialState:{
    data:{},
    status:'pending'
  },
  reducers:{

  }
})

export default UserSlice.reducer;