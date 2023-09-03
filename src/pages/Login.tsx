import React from 'react';

import {Box, Button, Stack, TextField, Typography} from '@mui/material';

const Login = React.memo(() => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
          }}
        >
          <form noValidate>
            <Typography variant="h4" mb={3}>
              Авторизация
            </Typography>
            <Stack spacing={3}>
              <TextField fullWidth label="Email Address" name="email" type="email" />
              <TextField fullWidth label="Code" name="code" type="password" />
            </Stack>
            <Button fullWidth size="large" mt={3} sx={{mt: 3}} type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
});
export default Login;
