import React, { useState } from 'react';

import './GoalInput.css';
import Card from '../UI/Card';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function updateGoalTextHandler(event) {
    setEnteredGoalText(event.target.value);
  }

  function goalSubmitHandler(event) {
    event.preventDefault();

    if (enteredGoalText.trim().length === 0) {
      alert('Invalid text - please enter a longer one!');
      return;
    }

    props.onAddGoal(enteredGoalText);

    setEnteredGoalText('');
  }

  const envDescription = process.env.ENV_TITLE ? process.env.ENV_TITLE : "DEVELOPMENT env with bindMount"
  return (
    <section id='goal-input'>
      <Card>
        <form onSubmit={goalSubmitHandler}>
          <h1>Docker Compose for {envDescription} </h1>
          <label htmlFor='text'>New Goal</label>
          <input
            type='text'
            id='text'
            value={enteredGoalText}
            onChange={updateGoalTextHandler}
          />
          <button>Add Goal</button>
        </form>
      </Card>
    </section>
  );
}

export default GoalInput;
