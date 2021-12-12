import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Head from "next/head";
import DefaultLayout from "../components/layouts/defaultLayout";
import { useRouter } from "next/router";
import { Copyright } from "../components/copyright";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    router.push("/home/");
  };

  return (
    <>
      <Head>
        <title>kajily | login</title>
      </Head>
      <DefaultLayout>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                overflow: "hidden",
                borderRadius: "4px",
                fontSize: 0,
                margin: "0 0 20px",
              }}
            >
              <Image
                src={"/kajily-icon.png"}
                alt="logo"
                height={80}
                width={80}
                layout="fixed"
              />
            </Box>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
        <Copyright />
      </DefaultLayout>
    </>
  );
};

export default Login;
