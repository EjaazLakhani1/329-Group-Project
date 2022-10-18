import React, { useState, useEffect  } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from "@material-ui/core";
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    marginLeft: 16
  },
})

const Questions = ({ page, setPage, sectionName }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState(false);
  const [qanswer, setAnswer] = useState('')

  const answer = 'Test'

  const correctAnswer = qanswer.toUpperCase().trim() === answer.toUpperCase()

  const onSubmit = () => {
    correctAnswer
      ? correct()
      : setError(true)
  }

  const onBack = () => {
    page === 0
      ? navigate('/')
      : setPage(page - 1)
  };

  const onNext = () => {
    page === (sectionName.subtopics.length -1)
      ? setDisabled(true)
      : setPage(page + 1)
    setError(false);
    setIsCorrect(false);
    setDisabled(false);
    navigate(`/lesson/${sectionName.topic}/${sectionName.subtopics[page]}`,{state:{...sectionName}})
  }

  const correct = () => {
    setIsCorrect(true);
    setError(false);
  }


  return (
    <div className={classes.title}>
      <h2>Question 1</h2>
      <TextField
        required
        id="outlined-required"
        label="Required"
        onChange={(event) => (setAnswer(event.target.value))}
        error={error}
      />
      <Button onClick={onSubmit}> Submit </Button>
      <Button onClick={onBack}> Back </Button>
      <Button onClick={onNext} disabled={!isCorrect || disabled}> Next </Button>
    </div>
  )
}

Questions.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  sectionName: PropTypes.object.isRequired,
}

export default Questions;