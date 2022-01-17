import { ThemeProvider } from '@mui/material/styles'

import muiTheme from '../../../styles/muiTheme'


const MUIThemeHOC: React.FC = ({ children }) => (
  <ThemeProvider theme={ muiTheme }>
    { children }
  </ThemeProvider>
)

export default MUIThemeHOC;