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

  return (
    <>
      <div className={classes.title}>
        <h1>{sectionName.topic}</h1>
        <h2>{sectionName.subtopics[page]}</h2>
      </div>
      <div>
        <p className={classes.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra. Amet venenatis urna cursus eget. Sit amet consectetur adipiscing elit duis. Fusce id velit ut tortor. Id ornare arcu odio ut sem nulla pharetra diam. Amet mattis vulputate enim nulla aliquet porttitor. Magna sit amet purus gravida quis blandit turpis cursus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. In ornare quam viverra orci. Sed arcu non odio euismod lacinia at. At tempor commodo ullamcorper a lacus vestibulum. <br></br> <br></br>

        Eu turpis egestas pretium aenean pharetra. Donec enim diam vulputate ut pharetra sit amet aliquam. Eget egestas purus viverra accumsan in. Eget dolor morbi non arcu risus quis varius quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Porttitor rhoncus dolor purus non enim praesent elementum. Vulputate dignissim suspendisse in est ante in. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Volutpat consequat mauris nunc congue nisi. <br></br> <br></br>

        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ornare quam viverra orci sagittis. In fermentum et sollicitudin ac orci phasellus egestas. Vehicula ipsum a arcu cursus vitae. Nam aliquam sem et tortor consequat id. Id diam maecenas ultricies mi eget mauris. Vitae semper quis lectus nulla at volutpat diam ut. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Tellus orci ac auctor augue mauris augue neque gravida in. <br></br> <br></br>

        Nulla at volutpat diam ut venenatis tellus in. Nullam vehicula ipsum a arcu cursus vitae congue. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet consectetur. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Euismod quis viverra nibh cras. Eget nullam non nisi est sit amet facilisis. At tempor commodo ullamcorper a lacus vestibulum. Ut placerat orci nulla pellentesque dignissim enim. Ornare quam viverra orci sagittis eu volutpat. Vestibulum rhoncus est pellentesque elit. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Praesent tristique magna sit amet purus gravida quis. <br></br> <br></br>

        Turpis massa sed elementum tempus. Ante in nibh mauris cursus mattis molestie. Porttitor eget dolor morbi non arcu risus quis. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Risus at ultrices mi tempus. Enim nulla aliquet porttitor lacus. Dignissim suspendisse in est ante in. Varius vel pharetra vel turpis nunc eget. Neque convallis a cras semper auctor neque. Non nisi est sit amet. Iaculis at erat pellentesque adipiscing commodo. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Vitae congue eu consequat ac. Malesuada fames ac turpis egestas. Magna etiam tempor orci eu. Feugiat sed lectus vestibulum mattis ullamcorper velit. Blandit massa enim nec dui nunc mattis. Et tortor at risus viverra adipiscing at in tellus. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.
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
