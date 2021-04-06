import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/action/action';
import { addToDo } from '../../todoSlice';


function AddToDo() {

  const [text, setText] = useState("");

  // const context = useSelector(state => state.reducer);

  // useEffect = (() => {

  // }, [])

  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(text);
  }

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      let id = Math.floor(Math.random() * 10000);
      const obj = {
        id,
        name: text,
        completed: false
      }
      dispatch(addToDo(obj));
      
      // dispatch(actions.addTodo(text, id));
      setText("");
    }
  }

  return (
    <div className="add-to-do">
      <form id="form" onSubmit={handleSubmit}>
        <input className="input-todo" onChange={handleChange} value={text} />
        <input type="submit" className="submit-todo" value="add" />
        {/* <a className="btn-add" onClick={addNew}>Add new</a> */}
      </form>
    </div>
  )
}

export default AddToDo
