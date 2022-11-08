import './App.css';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { map } from 'lodash/fp'
import { Grid, Paper, Box, Button } from '@material-ui/core';
import { SECTIONS } from './Constants/App';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SelectScreen = ({ name, type }) => {
  const [page, setPage] = useState({
    topic: '',
    author: '',
    id: 0,
  });

  const navigate = useNavigate();

  return (
    <div className="App">
      <>
        <h1>329 Project</h1>
        <Box sx={{ flexGrow: 1 }}>
          {map((section) => (
              <Grid container justifyContent="center" alignItems="center" className='Grid'>
                  <Grid item xs={6}>
                    <Item>
                      <h1 className="text">{section.topic}</h1>
                      <h2 className="text">{section.author}</h2>
                      <Button onClick={() => {
                        setPage(section)
                        navigate(`/${type}/${section.paths.topic}/${section.subtopics[0]}`,{state: {...section}})
                      }}>
                        <h2 className="text">{name}</h2>
                      </Button>
                    </Item>
                  </Grid>
              </Grid>
          ), SECTIONS)}
        </Box>
      </>
    </div>
  );
}

SelectScreen.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default SelectScreen;
