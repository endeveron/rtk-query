import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { authReducer } from '../features/auth/authSlice'
import { userAPI } from './services/userAPI'

const store = configureStore({

  // configureStore will automatically create the root reducer 
  // by passing this object to the Redux combineReducers utility
  reducer: {
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer
  },
  
  // configureStore will automatically pass those to applyMiddleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userAPI.middleware),

  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store;