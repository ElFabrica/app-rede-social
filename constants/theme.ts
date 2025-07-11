type FontWeight =
  | '100' | 100
  | '200' | 200
  | '300' | 300
  | '400' | 400
  | '500' | 500
  | '600' | 600
  | '700' | 700
  | '800' | 800
  | '900' | 900
  | 'normal'
  | 'bold';

export const theme = {
  colors: {
    primary: '#00C26F',
    primaryDark: '#00AC62',
    dark: '#3E3E3E',
    darkLight: '#E1E1E1',
    gray: '#e3e3e3',

    text: '#494949',
    textLight: '#7C7C7C',
    textDark: '#1D1D1D',

    rose: '#ef4444',
    roseLight: '#f87171',
  },

  fonts: {
    medium: '500' as FontWeight,
    semibold: '600' as FontWeight,
    bold: '700' as FontWeight,
    extraBold: '800' as FontWeight,
  },

  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
  },
};
