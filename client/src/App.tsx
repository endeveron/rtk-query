import AppRoutes from './routes/AppRoutes'

import MUIThemeHOC from './components/hoc/MUIThemeHOC/MUIThemeHOC'


const App = () => {

  return (
    <MUIThemeHOC>
      <AppRoutes />
    </MUIThemeHOC>
  )
}

export default App;