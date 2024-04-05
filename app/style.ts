"use client";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Inter", "Roboto", "Arial"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: 1.5,
          fontWeight: 500,
          fontSize: 16,
          color: "#9730FFFF",
          textTransform: "initial",
          background: "#9730FFFF",

        },
        outlined: {
          color: "#9730FFFF",
          borderColor: "#9730FFFF",
        },
        contained: {
          color: "white",
          opacity: 1,
          backgroundColor: "#9730FFFF !important",
          "&:hover": {
            backgroundColor: "#9730FFFF",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: "#9730FFFF",
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-root": {
            color: "#9730FFFF",
            borderRadius: "0px",
            "& fieldset": {
              borderColor: "#9730FFFF",
            },
            "&:hover fieldset": {
              borderColor: "#9730FFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#9730FFFF",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#9730FFFF",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#9730FFFF",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#9730FFFF",
        },
      },
    },
  },
  spacing: 8,
  palette: {
    primary: {
      main: "#9730FFFF",
    },
    secondary: {
      main: "#fccb08",
      contrastText: "#9730FFFF",
    },

    colors: {
      main: "#9730FFFF",
      yellow: "#fccb08",
      white: "#fff",
      label: "#555555",
    },
    input: {
      disabled: "#eaecf4",
    },
    button: {
      disabledColor: "#083945",
      disabledBackground: "#d6d9d8",
    },
  },
});

declare module "@mui/material/styles" {
  interface PaletteOptions {
    colors: {
      main: string;
      yellow: string;
      white: string;
      label: string;
    };
    input: {
      disabled: string;
    };
    button: {
      disabledColor: string;
      disabledBackground: string;
    };
  }
}
export const theme = defaultTheme;
