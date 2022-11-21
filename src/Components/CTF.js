import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { map } from 'lodash/fp'
import { CTF_QUESTIONS } from "../Constants/App";
import IndQuestion from "./IndQuestion";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
  para: {
    marginLeft: 32,
    marginRight: 32,
    whiteSpace: 'break-spaces'
  },
  buttons: {
    display: 'flex',
    paddingLeft: 64,
    paddingRight: 64,
  },
  title1: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

const CTF = ({ name }) => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const sectionName = location.state
  const author = sectionName.author;

  const onBack = () => {
    navigate('/ctf')
  };
  
  return (
    <>
      <div className={classes.title}>
      <div className={classes.buttons}>
        <Button onClick={onBack}> Back </Button>
        <div className={classes.title1}>
          <h1>{sectionName.topic}</h1>
        </div>
      </div>
        {map ((question) => (
          <>
            <h2>Question {question.index}</h2>
            <h4 className={classes.para}>{question.question}{question.hasLink && <a href={question.link} target="_blank">Here</a>}</h4>
            <IndQuestion questionAnswer={question.answer} />
          </>
        ), CTF_QUESTIONS[author])}
      </div>
    </>
  )
}

CTF.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CTF;
