import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00d9ff",
      light: "#5ce1ff",
      dark: "#00a8c7",
      contrastText: "#0a0a0f",
    },
    secondary: {
      main: "#a855f7",
      light: "#c084fc",
      dark: "#7c3aed",
    },
    background: {
      default: "#111117",
      paper: "#18181f",
    },
    text: {
      primary: "#e8e8e8",
      secondary: "#999999",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Fira Code", monospace',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
    },
    button: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#111117",
        },
        "::selection": {
          backgroundColor: "rgba(0, 217, 255, 0.3)",
        },
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: "#0a0a0f",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#2a2a35",
          borderRadius: "4px",
          "&:hover": {
            background: "#00d9ff33",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 24px",
          transition: "all 0.2s ease",
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.15)",
          "&:hover": {
            borderColor: "#00d9ff",
            backgroundColor: "rgba(0, 217, 255, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#121218",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          transition: "all 0.3s ease",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#18181f",
          background: "#18181f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          marginTop: "8px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Fira Code", monospace',
          color: "#e0e0e0",
        },
      },
    },
  },
});
