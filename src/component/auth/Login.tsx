import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Paper, Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useStyleAuth from "./AuthStyle";
import Typography from "@mui/material/Typography";
import axios from '../commmom/Axios'
interface IAuthLoginProps {}

const AuthLogin: React.FunctionComponent<IAuthLoginProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<any[]>([]);
  const classes = useStyleAuth();

  let fetchapi = () => {
    console.log(email)
    console.log(password)
    axios
      .post("auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };
  return (
    <>
      <Container
        component="main"
        maxWidth="xl"
        className={classes.setcontainer}
      >
        <div className={classes.setpageheading}>
          <Typography variant="h5" gutterBottom className={classes.setheading}>
            sstpl
          </Typography>
        </div>

        <Paper className={classes.setloginbackpaper} elevation={5}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.setloginheadset}
          >
            Sign in to start your session
          </Typography>
          {error}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={classes.setinput}>
                <label className={classes.setlabel}>Email :</label>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="outlined-basic"
                  size="small"
                  type="email"
                  placeholder="email"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.setinput}>
                <label className={classes.setlabel}>password :</label>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="outlined-basic"
                  size="small"
                  type="email"
                  placeholder="password"
                  variant="outlined"
                />
              </div>
            </Grid>

          </Grid>

          <Button
            variant="contained"
            className={classes.setloginbutton}
            onClick={fetchapi}
          >
            Login
          </Button>
          <div className={classes.setbottomtypography}>
            <Typography variant="body2" gutterBottom>
              Don't have an Account ?
            </Typography>
            <Typography
              variant="body2"
              noWrap
              component={Link}
              to="/signup"
              color="textPrimary"
            >
              Sign up.
            </Typography>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default AuthLogin;
