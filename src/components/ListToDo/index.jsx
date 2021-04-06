import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItemApi } from '../../Api.js';
import Count from '../Count/index.jsx';
import ItemToDo from '../ItemToDo/index.jsx';
import * as actions from '../../redux/action/action';
import { getToDo } from '../../todoSlice.js';

function ListToDo() {

  let context = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch với action thông thường
    // dispatch(actions.fetchItem());

    // Dispatch với action trong slice
    dispatch(getToDo());
  }, [])
  // console.log("context",context);
  return (
    <div>
      {/* {context && context.map((value, index) => (
                <>
                    {console.log(index)}
                    <ItemToDo value={value} key={index} />
                </>

            ))} */}
      {context && context.map((item, index) => {
        return <ItemToDo value={item} key={index} />
      })}
      {/* <Count value={context}/> */}
    </div>
  )
}

export default ListToDo;
