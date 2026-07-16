import { createTheme, ThemeOptions } from "@mui/material";

/** Unitless line heights required by MUI responsiveFontSizes; mirrors CSS --leading-* tokens. */
const commonTypography = {
  fontFamily: "var(--font-body)",
  h1: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "3.5rem",
    lineHeight: 1.25,
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: 1.25,
  },
  h3: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  h5: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.4,
  },
  h6: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.4,
  },
  subtitle1: {
    fontFamily: "var(--font-display)",
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  body1: {
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  button: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    textTransform: "none" as const,
  },
};

const commonComponents: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "var(--radius-md)",
        padding: "10px 24px",
        transition: `color var(--duration-fast) var(--ease), background-color var(--duration-fast) var(--ease), border-color var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease)`,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "var(--radius-xl)",
        backgroundColor: "var(--card-bg)",
        border: "var(--border-width) solid var(--border-color)",
        transition: `border-color var(--duration-normal) var(--ease), transform var(--duration-normal) var(--ease)`,
        boxShadow: "none",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 1100,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: "var(--radius-lg)",
        marginTop: "var(--space-2)",
        backgroundColor: "var(--card-bg)",
        background: "var(--card-bg)",
        border: "var(--border-width) solid var(--border-color)",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: "var(--font-display)",
        color: "var(--text-primary)",
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: `color var(--duration-fast) var(--ease), background-color var(--duration-fast) var(--ease)`,
      },
    },
  },
};

/** Palette hex values mirror CSS tokens so MUI contrast utils stay correct. */
const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#00d9ff",
    light: "#5ce1ff",
    dark: "#00a8c7",
    contrastText: "#0a0a0f",
  },
  secondary: {
    main: "#888888",
    light: "#aaaaaa",
    dark: "#555555",
  },
  background: {
    default: "#111117",
    paper: "#18181f",
  },
  text: {
    primary: "#e8e8e8",
    secondary: "#888888",
  },
  divider: "rgba(255, 255, 255, 0.06)",
};

const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#00a8c7",
    light: "#33c0d9",
    dark: "#0088aa",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#555555",
    light: "#888888",
    dark: "#333333",
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
  MuiButton: {
    styleOverrides: {
      ...commonComponents.MuiButton?.styleOverrides,
      outlined: {
        borderColor: "var(--border-color)",
        "&:hover": {
          borderColor: "var(--accent)",
          backgroundColor: "var(--accent-soft)",
        },
      },
    },
  },
};

const lightComponents: ThemeOptions["components"] = {
  ...commonComponents,
  MuiButton: {
    styleOverrides: {
      ...commonComponents.MuiButton?.styleOverrides,
      outlined: {
        borderColor: "var(--border-color)",
        "&:hover": {
          borderColor: "var(--accent)",
          backgroundColor: "var(--accent-soft)",
        },
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
