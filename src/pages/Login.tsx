import React from "react";
import {Box, Button, Stack, TextField} from "@mui/material";

const Login = React.memo(() => {

  return (
    <>
      <title>
          Login
      </title>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
              <form
                noValidate
              >
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                  />
                </Stack>
                {/*{formik.errors.submit && (*/}
                {/*  <Typography*/}
                {/*    color="error"*/}
                {/*    sx={{ mt: 3 }}*/}
                {/*    variant="body2"*/}
                {/*  >*/}
                {/*    {formik.errors.submit}*/}
                {/*  </Typography>*/}
                {/*)}*/}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
              </form>
        </Box>
      </Box>
    </>
  );
})
export default Login;
