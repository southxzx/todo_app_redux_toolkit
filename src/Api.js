export const addToDoApi = (item) => {
    const listToDo = JSON.parse(localStorage.getItem('todo'));
    
    if (listToDo){
        listToDo.push(item);
        localStorage.setItem('todo',JSON.stringify(listToDo));
    }
    else{
        localStorage.setItem('todo',JSON.stringify([item]));
    }
    // localStorage.setItem('todo',JSON.stringify(item));
}

export const removeItemApi = (item) => {
    const listToDo = JSON.parse(localStorage.getItem('todo'));

    const newList = listToDo.filter(value => value.id !== item.id);

    console.log("listToDo",newList);
    
    localStorage.setItem('todo',JSON.stringify(newList));
}

export const getItemApi = () => {
    return JSON.parse(localStorage.getItem('todo')); 
}

export const toggleItemApi = (item) => {
    const listToDo = JSON.parse(localStorage.getItem('todo'));

    const newList =  listToDo.map(value => {
        if(value.id === item.id){
            return Object.assign(value, {completed: !value.completed})
        }
        else{
            return value
        }
    })

    localStorage.setItem('todo',JSON.stringify(newList));
}