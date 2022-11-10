import React, { useState, useEffect  } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from "@material-ui/core";
import PropTypes from 'prop-types';

// const useStyles = makeStyles({
//   title: {
//     marginLeft: 16,
//     marginBottom: 16,
//   },
// })

const IndQuestion = ({questionAnswer}) => {
  // const classes = useStyles();

  // const [disabled, setDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState('')

  // const correctAnswer = qanswer.toUpperCase().trim() === answer.toUpperCase()

  const onSubmit = (ans) => {
    ans.toUpperCase().trim() === answer.toUpperCase()
      ? correct()
      : setError(true)
  }

  useEffect(() => {
    setAnswer('')
  }, [])

  const correct = () => {
    setIsCorrect(true);
    setError(false);
  }

  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Required"
        onChange={(event) => (setAnswer(event.target.value))}
        error={error}
      />
      <Button onClick={() => { onSubmit(questionAnswer) }}> Submit </Button>
    </>
  )
}

IndQuestion.propTypes = {
  questionAnswer: PropTypes.string.isRequired,
}

export default IndQuestion;