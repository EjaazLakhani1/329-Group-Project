import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { map } from 'lodash/fp'
import { LESSON_QUESTIONS } from "../Constants/App";
import IndQuestion from "./IndQuestion";

const useStyles = makeStyles({
  title: {
    marginLeft: 16,
    marginBottom: 16,
  },
})

const Questions = ({
    page, setPage, sectionName, author, subtopic,
  }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  // const [setError] = useState(false);
  // const [answer, setAnswer] = useState('')

  // const correctAnswer = qanswer.toUpperCase().trim() === answer.toUpperCase()

  const onBack = () => {
    page === 0
      ? navigate('/lessons')
      : setPage(page - 1)
  };

  const onNext = () => {
    page === (sectionName.subtopics.length -1)
      ? setDisabled(true)
      : setPage(page + 1)
    setIsCorrect(false);
    setDisabled(false);
    navigate(`/lesson/${sectionName.topic}/${sectionName.subtopics[page]}`,{state:{...sectionName}})
  }

  return (
    <div className={classes.title}>
      {map ((question) => (
        <>
          <h2>Question {question.number}</h2>
          <h3>{question.question}</h3>
          <IndQuestion questionAnswer={question.answer} />
        </>
      ), LESSON_QUESTIONS[author][subtopic] )}
      <Button onClick={onBack}> Back </Button>
      <Button onClick={onNext} disabled={!isCorrect || disabled}> Next </Button>
    </div>
  )
}

Questions.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  sectionName: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  subtopic: PropTypes.string.isRequired,
}

export default Questions;