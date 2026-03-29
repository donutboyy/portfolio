import { createTheme, ThemeOptions } from "@mui/material";

const commonTypography = {
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
    textTransform: "none" as const,
  },
};

const commonComponents = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollBehavior: "smooth",
      },
      "::selection": {
        backgroundColor: "rgba(0, 217, 255, 0.3)",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
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
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
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
        borderRadius: "12px",
        marginTop: "8px",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: '"Fira Code", monospace',
      },
    },
  },
};

const darkPalette = {
  mode: "dark" as const,
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
};

const lightPalette = {
  mode: "light" as const,
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
    default: "#f0f1f2",
    paper: "#f5f5f5",
  },
  text: {
    primary: "#1a1a1a",
    secondary: "#555555",
  },
  divider: "rgba(0, 0, 0, 0.08)",
};

const darkComponents: ThemeOptions["components"] = {
  ...commonComponents,
  MuiCssBaseline: {
    styleOverrides: {
      ...commonComponents.MuiCssBaseline?.styleOverrides,
      body: {
        backgroundColor: "#111117",
      },
      "::-webkit-scrollbar-track": {
        background: "#0a0a0f",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#2a2a35",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      ...commonComponents.MuiButton?.styleOverrides,
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
      ...commonComponents.MuiCard?.styleOverrides,
      root: {
        ...commonComponents.MuiCard?.styleOverrides?.root,
        backgroundColor: "#121218",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      ...commonComponents.MuiMenu?.styleOverrides,
      paper: {
        ...commonComponents.MuiMenu?.styleOverrides?.paper,
        backgroundColor: "#18181f",
        background: "#18181f",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      ...commonComponents.MuiMenuItem?.styleOverrides,
      root: {
        ...commonComponents.MuiMenuItem?.styleOverrides?.root,
        color: "#e0e0e0",
      },
    },
  },
};

const lightComponents: ThemeOptions["components"] = {
  ...commonComponents,
  MuiCssBaseline: {
    styleOverrides: {
      ...commonComponents.MuiCssBaseline?.styleOverrides,
      body: {
        backgroundColor: "#f8f9fa",
      },
      "::-webkit-scrollbar-track": {
        background: "#e0e0e0",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#b0b0b0",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      ...commonComponents.MuiButton?.styleOverrides,
      outlined: {
        borderColor: "rgba(0, 0, 0, 0.15)",
        "&:hover": {
          borderColor: "#00a8c7",
          backgroundColor: "rgba(0, 217, 255, 0.08)",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      ...commonComponents.MuiCard?.styleOverrides,
      root: {
        ...commonComponents.MuiCard?.styleOverrides?.root,
        backgroundColor: "#f5f5f5",
        border: "1px solid rgba(0, 0, 0, 0.08)",
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      ...commonComponents.MuiMenu?.styleOverrides,
      paper: {
        ...commonComponents.MuiMenu?.styleOverrides?.paper,
        backgroundColor: "#f5f5f5",
        background: "#f5f5f5",
        border: "1px solid rgba(0, 0, 0, 0.08)",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      ...commonComponents.MuiMenuItem?.styleOverrides,
      root: {
        ...commonComponents.MuiMenuItem?.styleOverrides?.root,
        color: "#1a1a1a",
      },
    },
  },
};

export function getTheme(mode: "light" | "dark") {
  const palette = mode === "dark" ? darkPalette : lightPalette;
  const components = mode === "dark" ? darkComponents : lightComponents;

  return createTheme({
    palette,
    typography: commonTypography,
    components,
  });
}
