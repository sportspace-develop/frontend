import {common} from '@mui/material/colors';
import {alpha} from '@mui/material/styles';

import {error, indigo, info, neutral, success, warning} from './colors';

export const createPalette = () => {
  return {
    primary: indigo,
    error,
    warning,
    info,
    success,
    mode: 'light',
    neutral,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    divider: '#F2F4F7',
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: common.white,
    },
  };
};

export type TPalette = ReturnType<typeof createPalette>;
