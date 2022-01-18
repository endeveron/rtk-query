import { StateParamStatus } from '../../types/stateParamStatus'


// redux state

interface TokenData {
  value: string,
  expDate: string,
}

export interface UserRegData {
  userId: string,
  email: string
}

export interface AuthData {
  token: TokenData,
  userRegData: UserRegData
}

export interface AuthState {
  token: TokenData,
  userRegData: UserRegData
  authFormStatus: StateParamStatus
  logoutStatus: StateParamStatus
}