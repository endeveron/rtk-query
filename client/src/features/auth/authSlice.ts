import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateParamStatus } from '../../types/stateParamStatus'
import { AuthData, AuthState } from './authTypes'

const initialState: AuthState = {
  token: {
    value: '',
    expDate: '',
  },
  userRegData: {
    userId: '',
    email: ''
  },
  authFormStatus: 'idle',
  logoutStatus: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.token = action.payload.token
      state.userRegData = action.payload.userRegData
    },
    setAuthFormStatus: (state, action: PayloadAction<StateParamStatus>) => {
      state.authFormStatus = action.payload
    },
    setLogoutStatus: (state, action: PayloadAction<StateParamStatus>) => {
      state.logoutStatus = action.payload
    },

    clear: state => initialState,
  }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer;