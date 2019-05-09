export const palette = {
  ice: 'hsl(240, 65%, 50%)',
  cool: 'hsl(240, 15%, 90%)',
  fire: 'hsl(30, 65%, 50%)',
  warm: 'hsl(30, 30%, 85%)',
  black: 'hsl(240, 40%, 10%)',
  darkGray: 'hsl(240, 10%, 30%)',
  lightGray: 'hsl(240, 40%, 96%)',
  white: 'hsl(0, 0%, 100%)',
};

export const fonts = {
  monospace: `'Space Mono', monospace`,
  sans: `'Work Sans', sans-serif`,
};

export const sizes = {
  xxLarge: '3.157rem',
  xLarge: '2.369rem',
  large: '1.777rem',
  medium: '1.333rem',
  small: '1rem',
  xSmall: '0.75rem',
};

const defaultTheme = {
  colors: {
    background: palette.white,
    primaryText: palette.black,
    secondaryText: palette.darkGray,
    emphasizedText: palette.darkGray,
  },
  fonts: {
    ...fonts,
  },
  sizes: {
    ...sizes,
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    background: palette.ice,
    primaryText: palette.white,
    secondaryText: palette.warm,
    emphasizedText: palette.fire,
  },
};

const theme = variant => {
  if (variant === 'dark') {
    return darkTheme;
  } else {
    return defaultTheme;
  }
};

export default theme;
