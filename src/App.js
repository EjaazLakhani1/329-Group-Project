import './App.css';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { map } from 'lodash/fp'
import { Grid, Paper, Box, Button } from '@material-ui/core';
import { SECTIONS } from './Constants/App';
import Question from './Components/Question';
import { useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [page, setPage] = useState({
    topic: '',
    author: '',
    id: 0,
  });

  const navigate = useNavigate();

  return (
    <div className="App">
      {page.id === 0 ?
      <>
        <h1>329 Project</h1>
        <Box sx={{ flexGrow: 1 }}>
          {map((section) => (
              <Grid container justifyContent="center" alignItems="center" className='Grid'>
                  <Grid item xs={6}>
                    <Item>
                      <h1 className="text">{section.topic}</h1>
                      <h3 className="text">{section.author}</h3>
                      <Button onClick={() => {
                        setPage(section)
                        navigate('/lesson')
                      }}>
                        <h2 className="text">Start Lesson</h2>
                      </Button>
                    </Item>
                  </Grid>
              </Grid>
          ), SECTIONS)}
        </Box>
      </>
      : <Question />
      }
    </div>
  );
}

export default Home;
