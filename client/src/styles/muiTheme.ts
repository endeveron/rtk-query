import { createTheme } from '@mui/material/styles'

import colors from '../styles/vars/colors.scss'


const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
    },
    success: {
      main: colors.successMain,
      light: colors.successLight,
      dark: colors.successDark,
    },
    error: {
      main: colors.errorMain,
      light: colors.errorLight,
      dark: colors.errorDark,
    },
    warning: {
      main: colors.warningMain,
      light: colors.warningLight,
      dark: colors.warningDark,
    },
    info: {
      main: colors.infoMain,
      light: colors.infoLight,
      dark: colors.infoDark,
    },
  },

})

export default muiTheme;