import { Icons } from 'src/configs/icons';

export type ThemeConfig = typeof themeConfig;

export const themeConfig = [
  {
    mode: 'dark',
    name: 'Change Theme to Dark',
    ThemeIcon: Icons.theme.moon
  },
  {
    mode: 'light',
    name: 'Change Theme to Light',
    ThemeIcon: Icons.theme.sun
  },
  {
    mode: 'system',
    name: 'Change Theme to System',
    ThemeIcon: Icons.theme.system
  }
];
