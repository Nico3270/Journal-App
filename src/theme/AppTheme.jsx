import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { purpleTheme } from "./purpleTheme"


export const AppTheme = ({children}) => {
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}



