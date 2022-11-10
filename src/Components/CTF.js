import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { map } from 'lodash/fp'
import { CTF_QUESTIONS } from "../Constants/App";
import IndQuestion from "./IndQuestion";

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
  para: {
    marginLeft: 32,
    marginRight: 32,
    whiteSpace: 'break-spaces'
  }
})

const CTF = ({ name }) => {
  const classes = useStyles();
  const location = useLocation();

  const sectionName = location.state
  const author = sectionName.author;
  
  return (
    <>
      <div className={classes.title}>
        <h1>{sectionName.topic} CTF</h1>
        {map ((question) => (
          <>
            <h2>Question {question.index}</h2>
            <h3>{question.question}</h3>
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
