import FirebaseProvider from "../utils/firebase/firebase"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { THEME2 } from "../components/variable"

const theme = createMuiTheme({
    palette: {
        primary: { main: THEME2.primary,
            contrastText: THEME2.white 
        },
        secondary: { main: THEME2.secondary },
        
    },
    typography: {
        fontFamily: 'Raleway, Arial',

      },
})

function MyApp({ Component, pageProps }) {

    return (<MuiThemeProvider theme={theme}><FirebaseProvider><Component {...pageProps} /></FirebaseProvider></MuiThemeProvider>)
}

export default MyApp
