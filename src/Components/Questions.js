import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp'
import { LESSON_QUESTIONS } from "../Constants/App";
import IndQuestion from "./IndQuestion";

const useStyles = makeStyles({
  title: {
    marginLeft: 16,
    marginBottom: 16,
  },
  question: {
    whiteSpace: 'break-spaces'
  },
})

const Questions = ({
    page, setPage, sectionName, author, subtopic,
  }) => {
  const classes = useStyles();

  const [isCorrect, setIsCorrect] = useState(false);
  // const [setError] = useState(false);
  // const [answer, setAnswer] = useState('')

  // const correctAnswer = qanswer.toUpperCase().trim() === answer.toUpperCase()

  return (
    <div className={classes.title}>
      {map ((question) => (
        <>
          <h2>Question {question.index}</h2>
          <h4 className={classes.question}>{question.question}</h4>
          <IndQuestion questionAnswer={question.answer} />
        </>
      ), LESSON_QUESTIONS[author][subtopic] )}
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