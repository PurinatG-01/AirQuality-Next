import FirebaseProvider from "../utils/firebase/firebase"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { THEME2 } from "../components/variable"
import { createGlobalStyle } from 'styled-components'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: THEME2.primary,
            contrastText: THEME2.white,
        },
        secondary: { main: THEME2.secondary },
    },
    typography: {
        fontFamily: THEME2.fontFam,
        h3: {
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: 20,
        },
        h4: {
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 8,
        },
        body1: {
            fontSize: 12,
            fontWeight: 100,
            color: THEME2.black,
        },
        body2: {
            fontWeight: 400,
        }
    },
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    color: THEME2.dividerColor,
                    borderBottomColor: THEME2.dividerColor,
                },

            }

        },
        MuiButton: {
            root: {
                borderRadius: 10,
                fontSize: 11,
            }


        }
    },
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {

    return (<>
        <GlobalStyle />
        <style jsx global>
            {`
          * {
            font-family: ${THEME2.fontFam};
          }
        `}
        </style><MuiThemeProvider theme={theme}><FirebaseProvider><Component {...pageProps} /></FirebaseProvider></MuiThemeProvider></>)
}

export default MyApp
