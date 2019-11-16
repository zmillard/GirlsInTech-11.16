import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  console.log(props.answers)
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
      <div>
        Your results were:
      </div>
      <div>
        {props.answers}
      </div>
      <div>
        This subject yeilds many challenges and many rewards. Users who follow this path will...
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
