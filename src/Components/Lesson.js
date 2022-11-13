import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import Questions from "./Questions";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
  para: {
    marginLeft: 64,
    marginRight: 64,
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

const Lesson = ({ type }) => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const sectionName = location.state
  const author = sectionName.author;
  const subtopic = sectionName.subtopics[page]

  const onBack = () => {
    if (page === 0) {
      navigate('/lessons')
    }
    else {
      setDisabled(false)
      setPage(page - 1)
      navigate(`/${type}/${sectionName.paths.topic}/${sectionName.paths.subtopics[page-1]}`,{state: {...sectionName}})
    }
  };

  const onNext = () => {
    if (page === (sectionName.paths.subtopics.length - 1)) {
      setDisabled(true)
      navigate(`/${type}/${sectionName.paths.topic}/${sectionName.paths.subtopics[page]}`,{state: {...sectionName}})
    }
    else {
      setPage(page + 1)
      navigate(`/${type}/${sectionName.paths.topic}/${sectionName.paths.subtopics[page+1]}`,{state: {...sectionName}})
    }
  }
  
  return (
    <>
      <div className={classes.title}>
        <div className={classes.buttons}>
          <Button onClick={onBack}> Back </Button>
          <div className={classes.title1}>
            <h2>{sectionName.topic}</h2>
          </div>
          <Button onClick={onNext} disabled={disabled} > Next </Button>
        </div>
        <h1>{sectionName.subtopics[page]}</h1>
      </div>
      <div>
        <p className={classes.para}>
          {sectionName.content.contents[page]}
        </p>
      </div>
      <div> 
        <Questions
          page={page}
          setPage={setPage}
          sectionName={sectionName}
          author={author}
          subtopic={subtopic}
        />
      </div>
    </>
  )
}

Lesson.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Lesson;
