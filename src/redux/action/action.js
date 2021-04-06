import {
    ADD_TODO,
    GET_ITEM,
    REMOVE_ITEM,
    TOGGLE_ITEM,
    GET_ARTICLES,
    FETCH_ITEM
} from './actionType';
import { addToDoApi, getItemApi, removeItemApi, toggleItemApi } from '../../Api';

export const getItem = (data) => {
    return {
        type: GET_ITEM,
        payload: data
    }
}
export const fetchItem = () => {
    // thunk
    // return async (dispatch) => {
    //     const res = await getItemApi();
    //     dispatch(getItem(res));
    // }
    return {
      type: FETCH_ITEM,
    }
}
export const addTodo = (name, id) => {
    const item = {
        name,
        id,
        completed: false
    }
    addToDoApi(item);
    return {
        type: ADD_TODO,
        payload: item
    }
}

export const removeItem = (item) => {

    removeItemApi(item);

    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const toggleItem = (item) => {
    toggleItemApi(item);
    return {
        type: TOGGLE_ITEM,
        payload: item.id
    }
}
export const getArticles = (articles) => {
    return {
        type: GET_ARTICLES,
        articles
    }
}

export const fetchArticles = (lang) => {
    return dispatch => {
        fetch(`https://api.vietcetera.com/client/api/v2/latest-article?limit=6&page=1&language=${lang.toUpperCase()}`)
        .then(res => res.json()).then(json => json).catch(err => console.log("err", err))

    }
}

// () => fetch(`https://api.vietcetera.com/client/api/v2/latest-article?limit=6&page=1&language=${lang.toUpperCase()}`)