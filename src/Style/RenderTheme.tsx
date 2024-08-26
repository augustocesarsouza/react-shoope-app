import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const RenderTheme = (children: any) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
