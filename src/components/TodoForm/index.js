import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './TodoForm.module.css';

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // onSubmit({
    //   id: uuid(),
    //   text: input,
    // });

    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form
      className={styles.todoForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="text"
        className={styles.todoInput}
        placeholder="Add todo"
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className={styles.todoButton}>
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
