import React, { useEffect, useState } from 'react';

function Count(props) {

    // const [completed, setCompleted] = useState(0);
    // const [incompleted, setIncompleted] = useState(0);
    let completed = 0;
    let incompleted = 0;

    props.value.map((value, key) =>{
        value.completed 
        ? completed+=1
        : incompleted+=1
    })
    
    // useEffect(() => {
    //     console.log(incompleted);
    //     return () => {
    //         setIncompleted(0);
    //         setCompleted(0);
    //     }
    // },[props])

    return (
        <div className="count">
            <span className="completed">Completed: {completed}</span>
            <span className="incompleted">Incompleted: {incompleted}</span>
        </div>
    )
}

export default Count
