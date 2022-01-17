import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Auth from '../components/pages/Auth/Auth'


const AppRoutes = () => {
  let routes = (
    <Routes>
      <Route
        path="auth"
        element={ <Auth /> }
      />
      <Route
        path="*"
        element={ <Navigate to="/auth" /> }

      // replace a nav item in a navigation stack
      // element={ <Navigate replace to="/auth" /> }
      />
    </Routes>
  )

  return (
    <BrowserRouter>
      { routes }
    </BrowserRouter>
  )
}

export default AppRoutes;