import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#1565c0",
      dark: "#003c8f",
      light: "#5e92f3",
      contrastText: "#fff"
    },
    secondary: {
      main: "#303f9f",
      dark: "#001970",
      light: "#666ad1",
      contrastText: "#fff"
    },
    text: {
      primary: "#000",
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    }
  },
})    