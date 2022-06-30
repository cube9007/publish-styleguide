import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  button: {
    fontSize: "inherit",
  },
  palette: {
    primary: {
      main: "#f3702a",
    },
    secondary: {
      main: "#353535",
    },
    error: {
      main: "#ff4949",
    },
    text: {
      primary: "#000",
    },
  },
});

export default theme;
