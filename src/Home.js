import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  empty: {
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  nw: {
    display: 'block',
  },
  text: {
    display: 'block'
  }
})

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className="App">
      <>
        <h1>329 Project</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center" alignItems="center" className={classes.nw}>
              <Grid item xs={4} className={classes.empty}>
                <Item>
                  <h1 className="text">Lessons</h1>
                  <Button onClick={() => {
                    navigate(`/lessons`)
                  }}>
                    <h2 className="text">Start Learning</h2>
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={4} className={classes.empty}>
                <Item>
                  <h1 className="text">CTF</h1>
                  <Button onClick={() => {
                    navigate(`/ctf`)
                  }} variant="outlined" color="error" >
                    <h2 className="text">Play CTF</h2>
                  </Button>
                </Item>
              </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
}

export default Home;
