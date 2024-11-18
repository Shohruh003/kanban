import { ThemeOptions } from "@mui/material"
import { createTheme } from "@mui/material/styles";
import { ruRU } from '@mui/material/locale';
import { ThemeTypes } from "./types/types";

const defaultTheme: ThemeOptions = {
    palette: {
        primary: {
            main: '#2E3E8B',
            contrastText: '#fff'
        },
        text: {
            primary: '#333',
            secondary: '#E27C25'
        },
        error: {
            main: '#A80000'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1080,
            xl: 1920
        }
    },
    typography: {
        h1: {
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: '54px',
            lineHeight: '88px'
        },
        h2:
        {
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '64px',
        },
        h3: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '56px'
        },
        h4: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '52px'
        },
        subtitle1: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32px'
        },
        subtitle2: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '32px'
        },
        body1: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px'
        },
        body2: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '30px'
        },
        button: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px'
        },
        caption: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px'
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    maxWidth: '1084px',
                    '@media (min-width:420px)': {
                        paddingRight: '24px',
                        paddingLeft: '24px'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    ":hover": {
                        color: '#4dcde3'
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#333',
                    "&.Mui-selected": {
                        color: '#2E3E8B',
                        backgroundColor: 'unset',
                        ":hover": {
                            color: '#2E3E8B',
                            backgroundColor: 'unset'
                        }
                    },
                    ":hover": {
                        color: '#2E3E8B',
                        backgroundColor: 'unset'
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paperWidthLg: {
                    minWidth: '1084px',
                    maxWidth: '1084px'
                },
                paperWidthMd: {
                    minWidth: '716px',
                    maxWidth: '716px',
                },
                paperWidthSm: {
                    minWidth: '420px',
                    maxWidth: '420px'
                },
                paperFullScreen: {
                    minWidth: 'auto'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            color: '#00B8D7',
                            borderColor: '#00B8D7',
                        },
                        '&.Mui-focused fieldset': {
                            color: '#00B8D7',
                            borderColor: '#00B8D7',
                        },
                    },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontSize: '14px',
                    '&.Mui-focused': {
                        color: '#00B8D7',
                        borderColor: '#00B8D7',
                    },

                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    lineHeight: '20px',
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    border: 'none',
                    padding: '14px 8px',
                    boxShadow: 'none',
                    backgroundColor: '#2E3E8B',
                    color: '#fff',
                    height: '48px',

                    '&.Mui-disabled.MuiButton-containedPrimary': {
                        color: '#fff'
                    },

                    '&.Mui-disabled.MuiButton-containedGreyBlock': {
                        backgroundColor: '#F2F4F7',
                        color: '#ccc'
                    },

                    '&:hover': {
                        boxShadow: 'none',
                        border: 'none',
                        backgroundColor: '#42c8de',
                    }
                }
            }
        },

        MuiInput: {
            styleOverrides: {
                input: {
                    color: '#333'
                }
            }
        }
    }
}

const redTheme: ThemeOptions = {
    palette: {
        primary: {
            main: '#FC6C85'
        },
        text: {
            primary: '#fff',
            secondary: '#81B37A'
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    maxWidth: '1084px',
                    '@media (min-width:420px)': {
                        paddingRight: '24px',
                        paddingLeft: '24px'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    ":hover": {
                        color: '#FC6C85'
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#333',
                    "&.Mui-selected": {
                        color: '#FC6C85',
                        backgroundColor: 'unset',
                        ":hover": {
                            color: '#FC6C85',
                            backgroundColor: 'unset'
                        }
                    },
                    ":hover": {
                        color: '#FC6C85',
                        backgroundColor: 'unset'
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paperWidthLg: {
                    minWidth: '1084px',
                    maxWidth: '1084px'
                },
                paperWidthMd: {
                    minWidth: '716px',
                    maxWidth: '716px',
                },
                paperWidthSm: {
                    minWidth: '420px',
                    maxWidth: '420px'
                },
                paperFullScreen: {
                    minWidth: 'auto'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            color: '#FC6C85',
                            borderColor: '#FC6C85',
                        },
                        '&.Mui-focused fieldset': {
                            color: '#FC6C85',
                            borderColor: '#FC6C85',
                        },
                    },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontSize: '14px',
                    '&.Mui-focused': {
                        color: '#FC6C85',
                        borderColor: '#FC6C85',
                    },

                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    lineHeight: '20px',
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    border: 'none',
                    padding: '14px 8px',
                    boxShadow: 'none',
                    backgroundColor: '#FC6C85',
                    color: '#fff',
                    height: '48px',

                    '&.Mui-disabled.MuiButton-containedPrimary': {
                        color: '#fff'
                    },

                    '&.Mui-disabled.MuiButton-containedGreyBlock': {
                        backgroundColor: '#FC6C85',
                        color: '#ccc'
                    },

                    '&:hover': {
                        boxShadow: 'none',
                        border: 'none',
                        backgroundColor: '#FC6C85',
                    }
                }
            }
        }
    }
}

const greenTheme: ThemeOptions = {
    palette: {
        primary: {
            main: '#81B37A'
        },
        text: {
            primary: '#fff',
            secondary: '#81B37A'
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    maxWidth: '1084px',
                    '@media (min-width:420px)': {
                        paddingRight: '24px',
                        paddingLeft: '24px'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    ":hover": {
                        color: '#81B37A'
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#333',
                    "&.Mui-selected": {
                        color: '#81B37A',
                        backgroundColor: 'unset',
                        ":hover": {
                            color: '#81B37A',
                            backgroundColor: 'unset'
                        }
                    },
                    ":hover": {
                        color: '#81B37A',
                        backgroundColor: 'unset'
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paperWidthLg: {
                    minWidth: '1084px',
                    maxWidth: '1084px'
                },
                paperWidthMd: {
                    minWidth: '716px',
                    maxWidth: '716px',
                },
                paperWidthSm: {
                    minWidth: '420px',
                    maxWidth: '420px'
                },
                paperFullScreen: {
                    minWidth: 'auto'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            color: '#81B37A',
                            borderColor: '#81B37A',
                        },
                        '&.Mui-focused fieldset': {
                            color: '#81B37A',
                            borderColor: '#81B37A',
                        },
                    },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontSize: '14px',
                    '&.Mui-focused': {
                        color: '#81B37A',
                        borderColor: '#81B37A',
                    },

                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    lineHeight: '20px',
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    border: 'none',
                    padding: '14px 8px',
                    boxShadow: 'none',
                    backgroundColor: '#81B37A',
                    color: '#fff',
                    height: '48px',

                    '&.Mui-disabled.MuiButton-containedPrimary': {
                        color: '#fff'
                    },

                    '&.Mui-disabled.MuiButton-containedGreyBlock': {
                        backgroundColor: '#81B37A',
                        color: '#ccc'
                    },

                    '&:hover': {
                        boxShadow: 'none',
                        border: 'none',
                        backgroundColor: '#81B37A',
                    }
                }
            }
        }
    }
}

export const getTheme = (currentTheme: ThemeTypes) => {
    switch (currentTheme) {
        case ThemeTypes.GREEN: return createTheme(Object.assign(defaultTheme, greenTheme), ruRU);
        case ThemeTypes.RED: return createTheme(Object.assign(defaultTheme, redTheme), ruRU);
        default: return createTheme(defaultTheme, ruRU);
    }
}
