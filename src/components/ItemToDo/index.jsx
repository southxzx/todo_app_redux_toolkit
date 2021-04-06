import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/action/action';

function ItemToDo(props) {

    // console.log(props);
    const dispatch = useDispatch(); 

    const handleClick = (item, type = "") => {
        if (type === "delete"){
            dispatch(actions.removeItem(item));
            // console.log("remove");
        } else if (type === "toggle"){
            dispatch(actions.toggleItem(item));
        }
    }
    return (
        <div className={props.value.completed ? "item-to-do completed" : "item-to-do"} onClick={() => handleClick(props.value, "toggle")}>
            {props.value.name}
            <div className="btn-section" onClick={() => handleClick(props.value, "delete")}>
                <div className="btn-delete">
                    <FontAwesomeIcon icon={faTrash}/>
                </div>
            </div>
        </div>
    )
}
export default ItemToDo
