import { createSlice } from '@reduxjs/toolkit'

const localStorageAdminToken = window.localStorage.getItem('admin-token');

const initialState = {
    adminToken: localStorageAdminToken ? localStorageAdminToken : null
} 

const authReducer = createSlice({
  name: 'authReducer',
  initialState: initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload
    }
  }
});

export const { setAdminToken } = authReducer.actions;
export default authReducer.reducer;