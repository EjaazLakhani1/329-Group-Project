import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Question = () => {
  const answer = 'Test'
  const [qanswer, setAnswer] = useState('')

  const onSubmit = () => {
    qanswer === answer ? console.log('correct') : console.log('incorrect')
  }
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        onChange={(event) => (setAnswer(event.target.value))}
      />
      <Button onClick={onSubmit}> Submit </Button>
    </>
  )
}

export default Question;
