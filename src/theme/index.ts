import {createTheme} from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';

const palette = createPalette();
const components = createComponents({ palette });
const shadows = createShadows();
const typography = createTypography();

export const theme = createTheme({
    components,
    palette,
    shadows,
    shape: {
      borderRadius: 8
    },
    typography
});

