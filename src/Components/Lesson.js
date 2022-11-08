import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import Questions from "./Questions";

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
  para: {
    marginLeft: 32,
    marginRight: 32
  }
})

const Lesson = ({ name }) => {
  const classes = useStyles();
  const location = useLocation();

  const [page, setPage] = useState(0);

  const sectionName = location.state
  console.log(location);
  return (
    <>
      <div className={classes.title}>
        <h2>{sectionName.topic}</h2>
        <h1>{sectionName.subtopics[page]}</h1>
      </div>
      <div>
        <p className={classes.para}>
          {sectionName.content.contents[page]}
        </p>
      </div>
      <Questions page={page} setPage={setPage} sectionName={sectionName} />
    </>
  )
}

Lesson.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lesson;
